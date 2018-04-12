//the game object

var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'game',
    { preload: preload, create: create, update: update });

// declare global variables for game
var player;
var arrowKey;
var sky;
var mountains;
var city;
var platformGroup;
var wallGroup;
var coinGroup;
var enemyGroup;
var score = 0;
var scoreText;
var healthBar;
var enemySound;
var lasers;
var spaceBar;
var powerUpGroup;
var powerUpActive = false;
var messageText;
var timeBar;
var timeUp = false;
var timeLimit = 80;

// preload game assets - runs once at start
function preload() {
  game.load.spritesheet('player', 'assets/images/dude.png', 32, 48, 9);
  game.load.image('sky', 'assets/images/sky-clouds.jpg');
  game.load.image('mountains', 'assets/images/mountain-skyline.png');
  game.load.image('city', 'assets/images/city-skyline.png');
  game.load.image('platform-50', 'assets/images/platform-050w.png');
  game.load.image('platform-100', 'assets/images/platform-100w.png');
  game.load.image('platform-200', 'assets/images/platform-200w.png');
  game.load.image('platform-300', 'assets/images/platform-300w.png');
  game.load.image('platform-400', 'assets/images/platform-400w.png');
  game.load.image('platform-500', 'assets/images/platform-500w.png');
  game.load.image('wall-50', 'assets/images/wall-050h.png');
  game.load.image('wall-150', 'assets/images/wall-150h.png');
  game.load.image('wall-250', 'assets/images/wall-250h.png');
  game.load.spritesheet('coin', 'assets/images/coin.png', 32, 32, 6);
  game.load.spritesheet('enemy', 'assets/images/cat.png', 32, 32, 4);
  game.load.image('bar-red', 'assets/images/bar-red.png');
  game.load.image('bar-green', 'assets/images/bar-green.png');
  game.load.image('bar-outline', 'assets/images/bar-outline.png');
  game.load.audio('enemy-sound', 'assets/sounds/meow.wav');
  game.load.image('greenLaser', 'assets/images/laser-purple.png');
  game.load.image('powerUp', 'assets/images/star.png');
  game.load.image('bar-black', 'assets/images/bar-black.png');
  game.load.image('bar-yellow', 'assets/images/bar-yellow.png')
}

// create game world - runs once after "preload" finished
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.checkCollision.up = false;
  game.world.setBounds(0, 0, 5000, 600);

  //background images
  sky = game.add.tileSprite(0, 0, 1000, 600, 'sky');
  mountains = game.add.tileSprite(0, 0, 1000, 600, 'mountains');
  city = game.add.tileSprite(0, 0, 1000, 600, 'city');
  sky.fixedToCamera = true;
  mountains.fixedToCamera = true;
  city.fixedToCamera = true;

  // PLATFORMS
  platformGroup = game.add.group();
  platformGroup.enableBody = true;

  // add ground platform
  var ground = platformGroup.create(0, game.world.height - 25, 'platform-500');
  ground.scale.setTo(.5, 1); // 10 * 500 = 5000 pixels wide

  // add platforms
  platformGroup.create(200, 500, 'platform-100');
  platformGroup.create(400, 425, 'platform-100');
  platformGroup.create(600, 350, 'platform-100');
  platformGroup.create(1500, 300, 'platform-100');
  platformGroup.create(50, 100, 'platform-50');
  platformGroup.create(250, 175, 'platform-50');
  platformGroup.create(450, 260, 'platform-50');
  platformGroup.create(1150, 475, 'platform-50');
  platformGroup.create(900, 275, 'platform-200');
  platformGroup.create(1350, 400, 'platform-100');
  platformGroup.create(1750, 300, 'platform-100');
  platformGroup.create(2000, 375, 'platform-100');
  platformGroup.create(2250, 320, 'platform-100');
  platformGroup.create(2500, 300, 'platform-50');
  platformGroup.create(2750, 340, 'platform-100');
  platformGroup.create(3000, 380, 'platform-50');
  platformGroup.create(3250, 420, 'platform-100');
  platformGroup.create(3500, 440, 'platform-200');
  platformGroup.create(3750, 475, 'platform-50');
  platformGroup.create(4000, 500, 'platform-100');
  platformGroup.create(4250, 450, 'platform-50');
  platformGroup.create(4500, 400, 'platform-200');
  platformGroup.create(4750, 375, 'platform-50');
  platformGroup.create(5000, 475, 'platform-50');





  platformGroup.setAll('body.immovable', true);

  //WALLS
  wallGroup = game.add.group();
  wallGroup.enableBody = true;

  //add WALLS
  wallGroup.create(525, 525, 'wall-50');
  wallGroup.create(1000, 425, 'wall-150');
  wallGroup.create(2000, 525, 'wall-50');
  wallGroup.create(3000, 525, 'wall-50');
  wallGroup.create(4000, 525, 'wall-50');
  wallGroup.setAll('body.immovable', true);

  //coins
  coinGroup = game.add.group();
  coinGroup.enableBody = true;

  //coins POSITION
  var coinPosition = [
    { x: 75, y: 0 }, { x: 75, y: 0 }, { x: 200, y: 250 },
        { x: 280, y: 0 }, { x: 400, y: 0 }, { x: 420, y: 300 },
        { x: 480, y: 0 }, { x: 600, y: 300 }, { x: 680, y: 0 },
        { x: 700, y: 400 }, { x: 850, y: 0 }, { x: 950, y: 0 },
        { x: 1050, y: 0 }, { x: 1175, y: 0 }, { x: 1375, y: 0 },
        { x: 1575, y: 0 }, { x: 1750, y: 0 },  { x: 2000, y: 0 },
        { x: 2250, y: 500 },  { x: 2500, y: 500},  { x: 2775, y: 500 },
        { x: 3000, y: 370 }, { x: 3250, y: 410 }, { x: 3500, y: 440 },
        { x: 3750, y: 440 }, { x: 4010, y: 480 }, { x: 4250, y: 460 },
        { x: 4500, y: 480 }, { x: 4750, y: 480 }, { x: 4780, y: 480 }
    ];

  //add coins
  for (var i = 0; i < coinPosition.length; i++) {
    var coin = coinGroup.create(coinPosition[i].x, coinPosition[i].y, 'coin');
    coin.anchor.setTo(0.5, 0.5);
    coin.body.gravity.y = 400;
    coin.body.bounce.y = 0.5;
    coin.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
    coin.animations.play('spin');
  }

  //add powerups
  powerUpGroup = game.add.group();
  powerUpGroup.enableBody = true;
  var powerUp = powerUpGroup.create(1000, 400, 'powerUp');
  var powerUp2 = powerUpGroup.create(3000, 370,  'powerUp');
  powerUp.anchor.setTo(0.5, 0.5);
  powerUp2.anchor.setTo(0.5, 0.5);



  //enemies
  enemyGroup = game.add.group();
  enemyGroup.enableBody = true;
  enemySound = game.add.audio('enemy-sound', 0.2);

  for (var x = 0; x < 10; x++) {
    var enemy = enemyGroup.create(x * 500 + 280, -500, 'enemy');
    enemy.anchor.setTo(0.5, 0.5);
    enemy.body.gravity.y = 300;
    enemy.body.bounce.x = '.02';
    enemy.scale.setTo(1.1, 1.1);
    enemy.body.collideWorldBounds = true;
    enemy.animations.add('left', [0, 1], 10, true);
    enemy.animations.add('right', [2, 3], 10, true);
    enemy.body.setCircle(10, 5, 5);
    enemy.body.velocity.x = Math.random() * 250 - 200;

    // gives the enemies a random velocity between 100-150
    if (Math.random() < 0.5) enemy.body.velocity.x *= -1;

    //gives the eneimes a 50% chance of changing their direction;

  }

  //adding player
  player = game.add.sprite(25, 300, 'player');
  game.camera.follow(player);
  player.anchor.setTo(0.5, 0.5);
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
  player.health = 100;
  player.maxHealth = 100;
  player.events.onKilled.add(function () {
    player.reset(25, 300, 100);
    healthBar.width = 211;

  });

  //enables physics for player sprite
  game.physics.arcade.enable(player);
  player.body.gravity.y = 450;
  player.body.collideWorldBounds = true;
  player.body.bounce.y = 0.25;
  arrowKey = game.input.keyboard.createCursorKeys();
  spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  //lasers

  lasers = game.add.group();
  lasers.enableBody = true;
  lasers.createMultiple(20, 'greenLaser');

  lasers.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetLaser);

  // Same as above, set the anchor of every sprite to 0.5, 1.0

  lasers.callAll('anchor.setTo', 'anchor', 0.5, 1.0);

  // This will set 'checkWorldBounds' to true on all sprites in the group

  lasers.setAll('checkWorldBounds', true);

  function resetLaser(laser) {

    // Destroy the laser

    laser.kill();
  }

  //// score
  scoreText = game.add.text(20, 20, 'Score: ' + score, { fontSize: '20px', fill: '#222222' });
  scoreText.fixedToCamera = true;

  //health text
  var healthText = game.add.text(300, 20, 'Health', { fontsize: '20px', fill: '#222222' });
  healthText.fixedToCamera = true;
  var barBackground;
  var barOutline;
  barBackground = game.add.image(400, 20, 'bar-red');
  barBackground.fixedToCamera = true;
  healthBar = game.add.image(400, 20, 'bar-green');
  healthBar.fixedToCamera = true;
  barOutline = game.add.image(400, 20, 'bar-outline');
  barOutline.fixedToCamera = true;

  //time
  var timeText = game.add.text(720, 20, 'Time', {fontSize: '20px', fill: '#222222'})
  timeText.fixedToCamera = true;
  barBackground = game.add.image(780, 20, 'bar-black');
  barBackground.fixedToCamera = true;
  timeBar = game.add.image(780, 20, 'bar-yellow');
  timeBar.fixedToCamera = true;
  barOutline = game.add.image(780, 20, 'bar-outline');
  barOutline.fixedToCamera = true;

  //distance markers temp
  messageText = game.add.text(500,100, '', {fontsize: '30px', fill: '#fffea7'} );
  messageText.anchor.setTo(0.5, 0.5);
  messageText.fixedToCamera = true;
  messageText.visible = false;
  game.add.text(1000, 300, '1000px', { fill: 'white' });
  game.add.text(2000, 300, '2000px', { fill: 'white' });
  game.add.text(3000, 300, '3000px', { fill: 'white' });
  game.add.text(4000, 300, '4000px', { fill: 'white' });

}

// update gameplay - runs in continuous loop after "create" finished
function update() {
  if (timeUp) gameOver();
  else displayTimeLeft();
  game.physics.arcade.collide(player, platformGroup);
  game.physics.arcade.collide(player, wallGroup);
  game.physics.arcade.collide(coinGroup, platformGroup);
  game.physics.arcade.collide(coinGroup, wallGroup);
  game.physics.arcade.collide(player, coinGroup, collectCoin, null, this);
  game.physics.arcade.collide(player, powerUpGroup, collectPowerUp);
  game.physics.arcade.collide(enemyGroup, platformGroup, patrolPlatform, null, this);
  game.physics.arcade.collide(enemyGroup, wallGroup, reverseDirection, null, this);
  game.physics.arcade.overlap(player, enemyGroup, touchEnemy);

  // collide allows moving objects to transfer momentum so this
  //means that the cats would speed upo when they touch the player
  // game.physics.arcade.collide(player, enemyGroup, playerHpDown, null, this);

  game.physics.arcade.collide(lasers, wallGroup, hitWall, null, this);
  game.physics.arcade.collide(lasers, platformGroup, hitWall, null, this);
  game.physics.arcade.collide(lasers, enemyGroup, laserHit, null, this);

  if (arrowKey.right.isDown) {
    var runSpeed = 200;
    if(powerUpActive) runSpeed = 300;
    player.body.velocity.x = runSpeed;
    player.animations.play('right');

  }else if (arrowKey.left.isDown) {
    var runSpeed = -200
    if(powerUpActive) runSpeed = -300
    player.body.velocity.x = runSpeed;
    player.animations.play('left');
  }else {
    player.body.velocity.x = 0;
    player.animations.stop();
    player.frame = 4;
  }

  //jumping
if (powerUpActive === false){
  if (arrowKey.up.justDown && player.body.touching.down){
     var jumpHeight = -300;
     if (powerUpActive) jumpHeight = -450;
     player.body.velocity.y = jumpHeight;
   }
 }
  else if (powerUpActive === true){
   if (arrowKey.up.justDown && powerUpActive){
      var jumpHeight = -300;
      if (powerUpActive) jumpHeight = -450;
      player.body.velocity.y = jumpHeight;
    }
  }
   // else if (arrowKey.up.justDown && player.body.touching.down && powerUpActive === false){
   //   var jumpHeight = -300;
   //   if (powerUpActive) jumpHeight = -450;
   //   player.body.velocity.y = jumpHeight;
   // }

  // if (arrowKey.up.justDown && player.body.touching.down && powerUpActive === false) {
  //   var jumpHeight = -300;
  //   if (powerUpActive) jumpHeight = -450;
  //   player.body.velocity.y = jumpHeight;
  // }

  //fire lasers
  if (arrowKey.down.isDown) {
    fireLaser();
    console.log('laser fired');
  }
  if (spaceBar.isDown) {
    leftFireLaser();
    console.log('laser fired');
  }


  //BACKGROUND PARALLAX
  sky.tilePosition.x = game.camera.x * -0.2; //furthest = slowest
  mountains.tilePosition.x = game.camera.x * -0.3;
  city.tilePosition.x = game.camera.x * -0.4; //closest = fastest

  // CHECK CAT ANIMATIONS
  //if the enemy's velocity is less than 0 this means it is moving left
  //otherwise it is moving right
  enemyGroup.forEach(function (enemy) {
    if (enemy.body.velocity.x < 0) enemy.animations.play('left');
    else enemy.animations.play('right');

  });

 if (powerUpActive === true){
    player.body.blocked.down === false;
 }
   else if(player.body.blocked.down === true){
        player.kill();
   }
 }
 // if (player.body.touching.down){
 //   player.kill();
 // }


// function playerHpDown(player, enemyGroup){
//     if(player.health > 0){
//   player.health -=10;
//   healthBar.width = healthBar.width -20;
//   //if enemy goruip velocity is greater than 0 set velocity = to opposite
//   console.log(player.health);
// }

// }
function displayTimeLeft(){
  var time = game.time.totalElapsedSeconds() /1;
  var timeLeft = timeLimit - time;
  // console.log(timeLeft);
  // timeLimit = timeLeft;
  //

if(timeLeft <= 0) {
    timeLeft = 0;
    timeUp = true;
    console.log(timeUp);
  }
  timeBar.scale.setTo(timeLeft / timeLimit, 1);
}

function collectCoin(player, coin) {
  coin.kill();
  score += 150;
  scoreText.text = 'Score: ' + score;
  checkWin();

  //for sounfx on coin pickup add play sound inside of colect coin function
  //1250 points for 25 coins
  //50 pts for coins 100 for enemies
  //in order to win one must collect all of the coins and defeat atleast 20 enemies
  //within the time limit
}

function checkWin (){
  if(score === 3900){
    messageText.text = 'You proably cheated but... Good job you won!! You may travel as you please';
    messageText.fill = '#00ff00';
    messageText.visible = true;
    messageText.fontSize = '20px';
    // player.exists = false;

    powerUpActive = true;
  }
  else if(score >= 4300) {
    messageText.text = 'By clearing this area of the evil cats you have become a member of The Golden Cat Hunters congratulations';
    messageText.fill = '#00ff00';
    messageText.fontSize = '15px';
    messageText.visible = true;
    // player.exists = false;
    powerUpActive = true;
    player.tint = 0xf0ff0f;

  }
}

function collectPowerUp(player, powerUp){
  if(score >= 4300) {
    powerUp.kill();
    messageText.text = 'By clearing this area of the evil cats you have become a member of The Golden Cat Hunters congratulations';
    messageText.fill = '#00ff00';
    messageText.fontSize = '15px';
    messageText.visible = true;
    // player.exists = false;
    powerUpActive = true;
    player.tint = 0xf0ff0f;
    player.body.collideWorldBounds = true;
  }
else {
  powerUp.kill();
  powerUpActive = true;
  player.body.collideWorldBounds = true;
  messageText.text = 'Power Boost';
  messageText.fill = '#00ff00';
  messageText.visible = true;
  player.tint = 0x00ff00;
  lasers.tint = 0x00ff00;
  game.time.events.add(Phaser.Timer.SECOND * 10, stopPowerUp, this);
}
}

function stopPowerUp(){
  powerUpActive = false;
  messageText.visible = false;
  player.tint = 0xFFFFFF;
}

function patrolPlatform(enemy, platform) {
  // if enemy about to go over right or left edge of platform

  if (enemy.body.velocity.x > 0 && enemy.right > platform.right ||
    enemy.body.velocity.x < 0 && enemy.left < platform.left) {
    enemy.body.velocity.x *= -1;

    // reverse direction
  }

}
function reverseDirection(enemy, wall){
enemy.body.velocity.x *= -1;

}
function touchEnemy(player, enemy) {
  enemy.body.velocity.x = Math.random() * 100 - 50;

  // gives the enemies a random velocity between 100-150

  if (Math.random() <= 0.5) enemy.body.velocity.x *= -1;
  enemy.body.velocity.y = -200;
  if (player.x < enemy.x) enemy.x += 30;
  else enemy.x -= 20;
  game.sound.play('enemy-sound');
  player.damage(+20);
  healthBar.scale.setTo(player.health / player.maxHealth, 1);
  // healthBar.width -= 10;
  console.log(player.health);

}

function fireLaser() {
  var laser = lasers.getFirstExists(false);
  if (laser) {

    // If we have a laser, set it to the starting position

    laser.reset(player.x - 30, player.y + 10);

    // G  ive it a velocity of -500 so it starts shooting

    laser.body.velocity.x = 300;
  }
}
function leftFireLaser() {
  var laser = lasers.getFirstExists(false);
  if (laser) {

    // If we have a laser, set it to the starting position

    laser.reset(player.x - 30, player.y + 10);

    // G  ive it a velocity of -500 so it starts shooting

    laser.body.velocity.x = -300;
  }
}

function hitWall(laser, wall) {
  laser.kill();
}

function laserHit(laser, enemy) {
  laser.kill();
  enemy.kill();
  score += 150;
  scoreText.text = 'Score: ' + score;

}

function gameOver (){
  if (score === 3900) {
    messageText.text = "Developed by yours truly Emmanuel Casimir @AResilientDev";
    messageText.fill = '#00ff00';
    messageText.fontSize = '15px';
    messageText.visible = true;
    powerUpActive = true;
    // player.exists = false;

  }
  else if (score >= 4300) {
    messageText.text = "Attention soilder the world needs you the evil cats are growing in number and you are the only one who can stop them - To be Continued?...";
    messageText.fill = '#00ff00';
    messageText.fontSize = '15px';
    messageText.visible = true;
    powerUpActive = true;
    player.tint = 0xf0ff0f;

  }

  else{
  messageText.text = "Times up thanks for playing & supporting a up & coming software developer - Developed by yours truly Emmanuel Casimir @AResilientDev ";
  messageText.fill = '#ff0000'
  messageText.fontSize = '15px'
  messageText.visible = true;
  player.exists = false;
  }
}
