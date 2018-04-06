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
  ground.scale.setTo(10, 1); // 10 * 500 = 5000 pixels wide

  // add platforms
  platformGroup.create(200, 500, 'platform-100');
  platformGroup.create(400, 425, 'platform-100');
  platformGroup.create(600, 350, 'platform-100');
  platformGroup.create(50, 100, 'platform-50');
  platformGroup.create(250, 175, 'platform-50');
  platformGroup.create(450, 260, 'platform-50');
  platformGroup.create(900, 275, 'platform-200');
  platformGroup.create(1150, 475, 'platform-50');
  platformGroup.create(1350, 500, 'platform-50');
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
    { x: 75, y: 0 }, { x: 150, y: 0 }, { x: 250, y: 250 },
        { x: 275, y: 0 }, { x: 350, y: 0 }, { x: 450, y: 300 },
        { x: 475, y: 0 }, { x: 537, y: 0 }, { x: 650, y: 0 },
        { x: 700, y: 400 }, { x: 850, y: 0 }, { x: 950, y: 0 },
        { x: 1050, y: 0 }, { x: 1175, y: 0 }, { x: 1375, y: 0 },
        { x: 1575, y: 0 }, { x: 1750, y: 0 },  { x: 2000, y: 0 },
        { x: 2250, y: 0 },  { x: 2500, y: 0 },  { x: 2775, y: 0 },
        { x: 3000, y: 0 },
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

  //enemies
  enemyGroup = game.add.group();
  enemyGroup.enableBody = true;
  enemySound = game.add.audio('enemy-sound', 0.2);

  for (var x = 0; x < 25; x++) {
    var enemy = enemyGroup.create(x * 200 + 100, 0, 'enemy');
    enemy.anchor.setTo(0.5, 0.5);
    enemy.body.gravity.y = 300;
    enemy.body.bounce.x = '.02';
    enemy.body.collideWorldBounds = true;
    enemy.animations.add('left', [0, 1], 10, true);
    enemy.animations.add('right', [2, 3], 10, true);
    enemy.body.setCircle(15, 5, 5);
    enemy.body.velocity.x = Math.random() * 200;

    // gives the enemies a random velocity between 100-150
    if (Math.random() <= 0.5) enemy.body.velocity.x *= -1;

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
  scoreText = game.add.text(20, 20, 'Score: ' + score, { fontSize: '30px', fill: '#222222' });
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

  //distance markers temp
  game.add.text(1000, 300, '1000px', { fill: 'white' });
  game.add.text(2000, 300, '2000px', { fill: 'white' });
  game.add.text(3000, 300, '3000px', { fill: 'white' });
  game.add.text(4000, 300, '4000px', { fill: 'white' });

}

// update gameplay - runs in continuous loop after "create" finished
function update() {
  game.physics.arcade.collide(player, platformGroup);
  game.physics.arcade.collide(player, wallGroup);
  game.physics.arcade.collide(coinGroup, platformGroup);
  game.physics.arcade.collide(coinGroup, wallGroup);
  game.physics.arcade.collide(player, coinGroup, collectCoin, null, this);
  game.physics.arcade.collide(enemyGroup, platformGroup, patrolPlatform, null, this);
  game.physics.arcade.collide(enemyGroup, wallGroup);
  game.physics.arcade.overlap(player, enemyGroup, touchEnemy);

  // collide allows moving objects to transfer momentum so this
  //means that the cats would speed upo when they touch the player
  // game.physics.arcade.collide(player, enemyGroup, playerHpDown, null, this);

  game.physics.arcade.collide(lasers, wallGroup, hitWall, null, this);
  game.physics.arcade.collide(lasers, platformGroup, hitWall, null, this);
  game.physics.arcade.collide(lasers, enemyGroup, laserHit, null, this);

  if (arrowKey.right.isDown) {
    player.body.velocity.x = 200;
    player.animations.play('right');

  }else if (arrowKey.left.isDown) {
    player.body.velocity.x = -200;
    player.animations.play('left');
  }else {
    player.body.velocity.x = 0;
    player.animations.stop();
    player.frame = 4;
  }

  //jumping
  if (arrowKey.up.justDown && player.body.touching.down) {
    player.body.velocity.y = -300;
  }

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
  sky.tilePosition.x = game.camera.x * -0.2;
  mountains.tilePosition.x = game.camera.x * -0.3;
  city.tilePosition.x = game.camera.x * -0.4;

  // CHECK CAT ANIMATIONS
  //if the enemy's velocity is less than 0 this means it is moving left
  //otherwise it is moving right
  enemyGroup.forEach(function (enemy) {
    if (enemy.body.velocity.x < 0) enemy.animations.play('left');
    else enemy.animations.play('right');

  });

 if (player.body.blocked.down === true){
   player.kill();
 }
}

// function playerHpDown(player, enemyGroup){
//     if(player.health > 0){
//   player.health -=10;
//   healthBar.width = healthBar.width -20;
//   //if enemy goruip velocity is greater than 0 set velocity = to opposite
//   console.log(player.health);
// }

// }

function collectCoin(player, coin) {
  coin.kill();
  score += 50;
  scoreText.text = 'Score: ' + score;

  //for sounfx on coin pickup add play sound inside of colect coin function
}

function patrolPlatform(enemy, platform) {
  // if enemy about to go over right or left edge of platform

  if (enemy.body.velocity.x > 0 && enemy.right > platform.right ||
    enemy.body.velocity.x < 0 && enemy.left < platform.left) {
    enemy.body.velocity.x *= -1;

    // reverse direction
  }

}

function touchEnemy(player, enemy) {
  enemy.body.velocity.x = Math.random() * 100 - 50;

  // gives the enemies a random velocity between 100-150

  if (Math.random() <= 0.5) enemy.body.velocity.x *= -1;
  enemy.body.velocity.y = -200;
  if (player.x < enemy.x) enemy.x += 30;
  else enemy.x -= 20;
  game.sound.play('enemy-sound');
  player.damage(+5);
  healthBar.width -= 10;
  console.log(player.health);

}

function fireLaser() {
  var laser = lasers.getFirstExists(false);
  if (laser) {

    // If we have a laser, set it to the starting position

    laser.reset(player.x - 30, player.y);

    // G  ive it a velocity of -500 so it starts shooting

    laser.body.velocity.x = 300;
  }
}
function leftFireLaser() {
  var laser = lasers.getFirstExists(false);
  if (laser) {

    // If we have a laser, set it to the starting position

    laser.reset(player.x - 30, player.y);

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
  score += 100;
  scoreText.text = 'Score: ' + score;

}
