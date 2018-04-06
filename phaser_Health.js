// <!DOCTYPE html>
// <!-- saved from url=(0086)https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js -->
// <html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//
//   <link rel="dns-prefetch" href="https://assets-cdn.github.com/">
//   <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com/">
//   <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com/">
//   <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com/">
//   <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com/">
//   <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
//   <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
//
//
//
//   <link crossorigin="anonymous" media="all" integrity="sha512-KDTN+N5tDqyAVqiTL8LuAYfCS2kKztX/cdejhBZu3hP7LuROj3O9LtASLb9ZMY5YALygmwk3Y5s1hy1vWLGtQg==" rel="stylesheet" href="./phaser_Health_files/frameworks-8f281eb0a8d2308ceb36e714ba3c3aec.css">
//   <link crossorigin="anonymous" media="all" integrity="sha512-S03SEUSDhm6inBJc+LqIfQQCCPuSaE//B8autRfAZ/i+6RaDVTILjDMImkuEswH+IW6xtCG94fTZ/2wd8cKFUA==" rel="stylesheet" href="./phaser_Health_files/github-a35bd71ee445e9c0799247764da31e0c.css">
//
//
//
//
//
//   <meta name="viewport" content="width=device-width">
//
//   <title>phaser/Health.js at v2.4.4 · photonstorm/phaser</title>
//     <meta name="description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
//   <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
//   <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
//   <meta property="fb:app_id" content="1401488693436528">
//
//
//     <meta property="og:image" content="https://avatars2.githubusercontent.com/u/164476?s=400&amp;v=4"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="photonstorm/phaser"><meta property="og:url" content="https://github.com/photonstorm/phaser"><meta property="og:description" content="phaser - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.">
//
//   <link rel="assets" href="https://assets-cdn.github.com/">
//   <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjQ3Nzk1NDczOmNmNmVkNDBiM2E3NTMzOTM1YmM1NGE0NmFkZGQ2NGNhNmI0YTg0NTUzYjUzNjRhNGVhZmQyOGJmMjVhNjlhMjg=--d9574f28ff0baf7a767ac30f2b76f72743c7a7d3">
//   <meta name="pjax-timeout" content="1000">
//   <link rel="sudo-modal" href="https://github.com/sessions/sudo_modal">
//
//
//
//
//
//
//
//     <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
//   <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
//   <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
//     <meta name="google-analytics" content="UA-3769691-2">
//
// <meta name="octolytics-host" content="collector.githubapp.com"><meta name="octolytics-app-id" content="github"><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event"><meta name="octolytics-dimension-request_id" content="D6D0:5D14:67C141:C960CD:5AC3B76D"><meta name="octolytics-dimension-region_edge" content="iad"><meta name="octolytics-dimension-region_render" content="iad"><meta name="octolytics-actor-id" content="36309179"><meta name="octolytics-actor-login" content="AResilientDev"><meta name="octolytics-actor-hash" content="aab173a3d2d7347c49a2c1eafea346d01e6911bf4ac9cf0421d2d134d2a785f9">
// <meta name="hydro-events-url" content="https://github.com/hydro_browser_events">
//
//
//
//
//
//   <meta class="js-ga-set" name="dimension1" content="Logged In">
//
//
//
//
//       <meta name="hostname" content="github.com">
//     <meta name="user-login" content="AResilientDev">
//
//       <meta name="expected-hostname" content="github.com">
//     <meta name="js-proxy-site-detection-payload" content="NWJkMDJiMTUzOWVkYjg0OWFmYWIwNGYzYTgzOTQyNjUwZTJjMjg3MmIxODg2ZGU5YzdhNjEzZTFiZWYzY2U3MXx7InJlbW90ZV9hZGRyZXNzIjoiMTM1Ljg0LjU3LjM2IiwicmVxdWVzdF9pZCI6IkQ2RDA6NUQxNDo2N0MxNDE6Qzk2MENEOjVBQzNCNzZEIiwidGltZXN0YW1wIjoxNTIyNzc1OTE5LCJob3N0IjoiZ2l0aHViLmNvbSJ9">
//
//     <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES,JS_ROLLUP_MODULES">
//
//   <meta name="html-safe-nonce" content="912066a802686998b51dc3b1187a8cdd965dbd24">
//
//   <meta http-equiv="x-pjax-version" content="a7446dfcc5eccdbf733c72fa033aa722">
//
//
//       <link href="https://github.com/photonstorm/phaser/commits/v2.4.4.atom" rel="alternate" title="Recent Commits to phaser:v2.4.4" type="application/atom+xml">
//
//   <meta name="description" content="phaser - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.">
//   <meta name="go-import" content="github.com/photonstorm/phaser git https://github.com/photonstorm/phaser.git">
//
//   <meta name="octolytics-dimension-user_id" content="164476"><meta name="octolytics-dimension-user_login" content="photonstorm"><meta name="octolytics-dimension-repository_id" content="9393759"><meta name="octolytics-dimension-repository_nwo" content="photonstorm/phaser"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="9393759"><meta name="octolytics-dimension-repository_network_root_nwo" content="photonstorm/phaser"><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false">
//
//
//
//
//
//   <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
//
//   <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
//
//   <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
//   <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">
//
// <meta name="theme-color" content="#1e2327">
//
//
//   <meta name="u2f-support" content="true">
//
// <link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials">
//
//   <meta name="request-id" content="D6D0:5D14:67C141:C960CD:5AC3B76D" data-pjax-transient="true"><meta name="selected-link" value="repo_source" data-pjax-transient="true"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true"><link rel="canonical" href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js" data-pjax-transient="true"></head>
//
//   <body class="logged-in env-production page-blob intent-mouse">
//
//
//   <div class="position-relative js-header-wrapper ">
//     <a href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
//     <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress" style="transition: width 0.4s ease 0s; width: 100%;"></div></div>
//
//
//
//
//
//
//
//
// <header class="Header  f5" role="banner">
//   <div class="d-flex flex-justify-between px-3 container-lg">
//     <div class="d-flex flex-justify-between ">
//       <div class="">
//         <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
//   <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
// </a>
//
//       </div>
//
//     </div>
//
//     <div class="HeaderMenu d-flex flex-justify-between flex-auto">
//       <div class="d-flex">
//             <div class="">
//               <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
//   <!-- '"` --><!-- </textarea></xmp> --><form class="js-site-search-form" data-scoped-search-url="/photonstorm/phaser/search" data-unscoped-search-url="/search" action="https://github.com/photonstorm/phaser/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
//     <label class="form-control header-search-wrapper  js-chromeless-input-container">
//         <a class="header-search-scope no-underline" href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js">This repository</a>
//       <input type="text" class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable" data-hotkey="s,/" name="q" value="" placeholder="Search" aria-label="Search this repository" data-unscoped-placeholder="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off">
//         <input type="hidden" class="js-site-search-type-field" name="type">
//     </label>
// </form></div>
//
//             </div>
//
//           <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
//             <li>
//               <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="https://github.com/pulls">
//                 Pull requests
// </a>            </li>
//             <li>
//               <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="https://github.com/issues">
//                 Issues
// </a>            </li>
//                 <li>
//                   <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace" href="https://github.com/marketplace">
//                     Marketplace
// </a>                </li>
//             <li>
//               <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="https://github.com/explore">
//                 Explore
// </a>            </li>
//           </ul>
//       </div>
//
//       <div class="d-flex">
//
// <ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
//   <li class="dropdown js-menu-container">
//     <span class="d-inline-block  px-2">
//
//     <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:36309179" href="https://github.com/notifications">
//         <span class="mail-status "></span>
//         <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
// </a>
//     </span>
//   </li>
//
//   <li class="dropdown js-menu-container">
//     <details class="dropdown-details details-reset js-dropdown-details d-flex px-2 flex-items-center">
//       <summary class="HeaderNavlink" aria-label="Create new…" data-ga-click="Header, create new, icon:add">
//         <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
//         <span class="dropdown-caret mt-1"></span>
//       </summary>
//
//       <ul class="dropdown-menu dropdown-menu-sw">
//
// <a class="dropdown-item" href="https://github.com/new" data-ga-click="Header, create new repository">
//   New repository
// </a>
//
//   <a class="dropdown-item" href="https://github.com/new/import" data-ga-click="Header, import a repository">
//     Import repository
//   </a>
//
// <a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
//   New gist
// </a>
//
//   <a class="dropdown-item" href="https://github.com/organizations/new" data-ga-click="Header, create new organization">
//     New organization
//   </a>
//
//
//
//   <div class="dropdown-divider"></div>
//   <div class="dropdown-header">
//     <span title="photonstorm/phaser">This repository</span>
//   </div>
//     <a class="dropdown-item" href="https://github.com/photonstorm/phaser/issues/new" data-ga-click="Header, create new issue">
//       New issue
//     </a>
//
//       </ul>
//     </details>
//   </li>
//
//   <li class="dropdown js-menu-container">
//
//     <details class="dropdown-details details-reset js-dropdown-details d-flex pl-2 flex-items-center">
//       <summary class="HeaderNavlink name mt-1" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar">
//         <img alt="@AResilientDev" class="avatar float-left mr-1" src="./phaser_Health_files/36309179" height="20" width="20">
//         <span class="dropdown-caret"></span>
//       </summary>
//
//       <ul class="dropdown-menu dropdown-menu-sw">
//         <li class="dropdown-header header-nav-current-user css-truncate">
//           Signed in as <strong class="css-truncate-target">AResilientDev</strong>
//         </li>
//
//         <li class="dropdown-divider"></li>
//
//         <li><a class="dropdown-item" href="https://github.com/AResilientDev" data-ga-click="Header, go to profile, text:your profile">
//           Your profile
//         </a></li>
//         <li><a class="dropdown-item" href="https://github.com/AResilientDev?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
//           Your stars
//         </a></li>
//           <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>
//
//         <li class="dropdown-divider"></li>
//
//         <li><a class="dropdown-item" href="https://help.github.com/" data-ga-click="Header, go to help, text:help">
//           Help
//         </a></li>
//
//         <li><a class="dropdown-item" href="https://github.com/settings/profile" data-ga-click="Header, go to settings, icon:settings">
//           Settings
//         </a></li>
//
//         <li><!-- '"` --><!-- </textarea></xmp> --><form class="logout-form" action="https://github.com/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="dSLtjdrcbRcPLBKJvVygQTE1HMxYpkFZQx0ecgTh+Cv5KTxqxjjOagzOA3uKLPhoDnF43e+jMdisRpVeui/zjg==">
//           <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
//             Sign out
//           </button>
//         </form></li>
//       </ul>
//     </details>
//   </li>
// </ul>
//
//
//
//         <!-- '"` --><!-- </textarea></xmp> --><form class="sr-only right-0" action="https://github.com/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="UND4lq+/bLpWnd4z9lsiKNejcB/idwhKzmYr2ne/887c2ylxs1vPx1V/z8HBK3oB6OcUDlVyeMshPaD2yXH4aw==">
//           <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
//             Sign out
//           </button>
// </form>      </div>
//     </div>
//   </div>
// </header>
//
//
//
//   </div>
//
//   <div id="start-of-content" class="show-on-focus"></div>
//
//     <div id="js-flash-container">
// </div>
//
//
//
//   <div role="main" class="application-main ">
//         <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
//     <div id="js-repo-pjax-container" data-pjax-container="">
//
//
//
//
//
//
//
//
//   <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
//     <div class="repohead-details-container clearfix container">
//
//       <ul class="pagehead-actions">
//   <li>
//         <!-- '"` --><!-- </textarea></xmp> --><form data-autosubmit="true" data-remote="true" class="js-social-container" action="https://github.com/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="ipXnPTrQYUwrDvRcFRUNjG9cGbcXBV/vCmTiDSWBMZTqcUCfXZ3skCJkoHtdfJ54gkW3ZoCv7fASHjhGWtUuBw==">      <input type="hidden" name="repository_id" id="repository_id" value="9393759" class="form-control">
//
//         <div class="select-menu js-menu-container js-select-menu">
//           <a href="https://github.com/photonstorm/phaser/subscription" class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Toggle repository notifications menu" data-ga-click="Repository, click Watch settings, action:blob#show">
//             <span class="js-select-button">
//                 <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
//                 Watch
//             </span>
//           </a>
//           <a class="social-count js-social-count" href="https://github.com/photonstorm/phaser/watchers" aria-label="1242 users are watching this repository">
//             1,242
//           </a>
//
//         <div class="select-menu-modal-holder">
//           <div class="select-menu-modal subscription-menu-modal js-menu-content">
//             <div class="select-menu-header js-navigation-enable" tabindex="-1">
//               <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
//               <span class="select-menu-title">Notifications</span>
//             </div>
//
//               <div class="select-menu-list js-navigation-container" role="menu">
//
//                 <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
//                   <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//                   <div class="select-menu-item-text">
//                     <input type="radio" name="do" id="do_included" value="included" checked="checked">
//                     <span class="select-menu-item-heading">Not watching</span>
//                     <span class="description">Be notified when participating or @mentioned.</span>
//                     <span class="js-select-button-text hidden-select-button-text">
//                       <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
//                       Watch
//                     </span>
//                   </div>
//                 </div>
//
//                 <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
//                   <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//                   <div class="select-menu-item-text">
//                     <input type="radio" name="do" id="do_subscribed" value="subscribed">
//                     <span class="select-menu-item-heading">Watching</span>
//                     <span class="description">Be notified of all conversations.</span>
//                     <span class="js-select-button-text hidden-select-button-text">
//                       <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
//                         Unwatch
//                     </span>
//                   </div>
//                 </div>
//
//                 <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
//                   <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//                   <div class="select-menu-item-text">
//                     <input type="radio" name="do" id="do_ignore" value="ignore">
//                     <span class="select-menu-item-heading">Ignoring</span>
//                     <span class="description">Never be notified.</span>
//                     <span class="js-select-button-text hidden-select-button-text">
//                       <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
//                         Stop ignoring
//                     </span>
//                   </div>
//                 </div>
//
//               </div>
//
//             </div>
//           </div>
//         </div>
// </form>
//   </li>
//
//   <li>
//
//   <div class="js-toggler-container js-social-container starring-container ">
//     <!-- '"` --><!-- </textarea></xmp> --><form class="starred js-social-form" action="https://github.com/photonstorm/phaser/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="hXF2QmAQQMM1dpF+a7TbgCOI6cWkAkPG1mvsiDKdNs+mTIbFCOwgWeHDzDu/dukIvUjGosn6ThMt3mWFo4Sblg==">
//       <input type="hidden" name="context" value="repository">
//       <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar photonstorm/phaser" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
//         <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
//         Unstar
//       </button>
//         <a class="social-count js-social-count" href="https://github.com/photonstorm/phaser/stargazers" aria-label="20668 users starred this repository">
//           20,668
//         </a>
// </form>
//     <!-- '"` --><!-- </textarea></xmp> --><form class="unstarred js-social-form" action="https://github.com/photonstorm/phaser/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="dwaDAVm8gkIgi68ogofwTN82+iTiv7XFtYoLRXzdEu/XeBCZxaQXXEePIPsJ7olYLcE/rzvRyNSE5Rn3PsLHDQ==">
//       <input type="hidden" name="context" value="repository">
//       <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Star this repository" title="Star photonstorm/phaser" data-ga-click="Repository, click star button, action:blob#show; text:Star">
//         <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
//         Star
//       </button>
//         <a class="social-count js-social-count" href="https://github.com/photonstorm/phaser/stargazers" aria-label="20668 users starred this repository">
//           20,668
//         </a>
// </form>  </div>
//
//   </li>
//
//   <li>
//           <!-- '"` --><!-- </textarea></xmp> --><form class="btn-with-count" action="https://github.com/photonstorm/phaser/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="HvhPVMD53p/v1nWyhCdZfVgNKEcIQrtnmIA/BcBe73A8VpiOVewK1z4j5r6UK+x/rYbikqFO3qgYEmPBPoHH1A==">
//             <button type="submit" class="btn btn-sm btn-with-count" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" title="Fork your own copy of photonstorm/phaser to your account" aria-label="Fork your own copy of photonstorm/phaser to your account">
//               <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
//               Fork
//             </button>
// </form>
//     <a href="https://github.com/photonstorm/phaser/network" class="social-count" aria-label="5382 users forked this repository">
//       5,382
//     </a>
//   </li>
// </ul>
//
//       <h1 class="public ">
//   <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
//   <span class="author" itemprop="author"><a class="url fn" rel="author" href="https://github.com/photonstorm">photonstorm</a></span><!--
// --><span class="path-divider">/</span><!--
// --><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="https://github.com/photonstorm/phaser">phaser</a></strong>
//
// </h1>
//
//     </div>
//
// <nav class="reponav js-repo-nav js-sidenav-container-pjax container" itemscope="" itemtype="http://schema.org/BreadcrumbList" role="navigation" data-pjax="#js-repo-pjax-container">
//
//   <span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
//     <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /photonstorm/phaser/tree/v2.4.4" href="https://github.com/photonstorm/phaser/tree/v2.4.4">
//       <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
//       <span itemprop="name">Code</span>
//       <meta itemprop="position" content="1">
// </a>  </span>
//
//     <span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
//       <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /photonstorm/phaser/issues" href="https://github.com/photonstorm/phaser/issues">
//         <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
//         <span itemprop="name">Issues</span>
//         <span class="Counter">40</span>
//         <meta itemprop="position" content="2">
// </a>    </span>
//
//   <span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
//     <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /photonstorm/phaser/pulls" href="https://github.com/photonstorm/phaser/pulls">
//       <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
//       <span itemprop="name">Pull requests</span>
//       <span class="Counter">4</span>
//       <meta itemprop="position" content="3">
// </a>  </span>
//
//     <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /photonstorm/phaser/projects" href="https://github.com/photonstorm/phaser/projects">
//       <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg>
//       Projects
//       <span class="Counter">0</span>
// </a>
//
//
//   <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /photonstorm/phaser/pulse" href="https://github.com/photonstorm/phaser/pulse">
//     <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
//     Insights
// </a>
//
// </nav>
//
//
//   </div>
//
// <div class="container new-discussion-timeline experiment-repo-nav  ">
//   <div class="repository-content ">
//
//
//   <a class="d-none js-permalink-shortcut" data-hotkey="y" href="https://github.com/photonstorm/phaser/blob/c9c85330ab60547b39ba4c9400c258ed7fb2a317/src/gameobjects/components/Health.js">Permalink</a>
//
//   <!-- blob contrib key: blob_contributors:v21:b753c57b1b9bb9bb86077918be1a3ee6 -->
//
//   <div class="file-navigation">
//
// <div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
//   <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w" type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
//       <i>Tag:</i>
//       <span class="js-select-button css-truncate-target">v2.4.4</span>
//   </button>
//
//   <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax="">
//
//     <div class="select-menu-modal">
//       <div class="select-menu-header">
//         <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
//         <span class="select-menu-title">Switch branches/tags</span>
//       </div>
//
//       <div class="select-menu-filters">
//         <div class="select-menu-text-filter">
//           <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
//         </div>
//         <div class="select-menu-tabs">
//           <ul>
//             <li class="select-menu-tab">
//               <a href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
//             </li>
//             <li class="select-menu-tab">
//               <a href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//
//       <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">
//
//         <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">
//
//
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/blob/containers/src/gameobjects/components/Health.js" data-name="containers" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
//                 containers
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/blob/master/src/gameobjects/components/Health.js" data-name="master" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
//                 master
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/blob/render-pass/src/gameobjects/components/Health.js" data-name="render-pass" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
//                 render-pass
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/blob/rendering-cleanup/src/gameobjects/components/Health.js" data-name="rendering-cleanup" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
//                 rendering-cleanup
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/blob/webgl-tilemap/src/gameobjects/components/Health.js" data-name="webgl-tilemap" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
//                 webgl-tilemap
//               </span>
//             </a>
//         </div>
//
//           <div class="select-menu-no-results">Nothing to show</div>
//       </div>
//
//       <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
//         <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">
//
//
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.3.0/src/gameobjects/components/Health.js" data-name="v3.3.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.3.0">
//                 v3.3.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.2.1/src/gameobjects/components/Health.js" data-name="v3.2.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.2.1">
//                 v3.2.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.2.0/src/gameobjects/components/Health.js" data-name="v3.2.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.2.0">
//                 v3.2.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.1.2/src/gameobjects/components/Health.js" data-name="v3.1.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.1.2">
//                 v3.1.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.1.1/src/gameobjects/components/Health.js" data-name="v3.1.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.1.1">
//                 v3.1.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.1.0/src/gameobjects/components/Health.js" data-name="v3.1.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.1.0">
//                 v3.1.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0/src/gameobjects/components/Health.js" data-name="v3.0.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0">
//                 v3.0.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.20/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.20" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.20">
//                 v3.0.0-beta.20
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.19/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.19" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.19">
//                 v3.0.0-beta.19
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.18/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.18" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.18">
//                 v3.0.0-beta.18
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.16/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.16" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.16">
//                 v3.0.0-beta.16
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.15/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.15" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.15">
//                 v3.0.0-beta.15
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.14/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.14" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.14">
//                 v3.0.0-beta.14
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.13/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.13" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.13">
//                 v3.0.0-beta.13
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.12/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.12" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.12">
//                 v3.0.0-beta.12
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.11/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.11" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.11">
//                 v3.0.0-beta.11
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.10/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.10" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.10">
//                 v3.0.0-beta.10
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.9/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.9" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.9">
//                 v3.0.0-beta.9
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.8/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.8" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.8">
//                 v3.0.0-beta.8
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.7/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.7" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.7">
//                 v3.0.0-beta.7
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.6/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.6" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.6">
//                 v3.0.0-beta.6
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.5/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.5" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.5">
//                 v3.0.0-beta.5
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.4/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.4" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.4">
//                 v3.0.0-beta.4
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.2/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.2">
//                 v3.0.0-beta.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-beta.1/src/gameobjects/components/Health.js" data-name="v3.0.0-beta.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-beta.1">
//                 v3.0.0-beta.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-alpha.2/src/gameobjects/components/Health.js" data-name="v3.0.0-alpha.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-alpha.2">
//                 v3.0.0-alpha.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v3.0.0-alpha/src/gameobjects/components/Health.js" data-name="v3.0.0-alpha" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v3.0.0-alpha">
//                 v3.0.0-alpha
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.6.2/src/gameobjects/components/Health.js" data-name="v2.6.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.6.2">
//                 v2.6.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.6.1/src/gameobjects/components/Health.js" data-name="v2.6.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.6.1">
//                 v2.6.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.6.0/src/gameobjects/components/Health.js" data-name="v2.6.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.6.0">
//                 v2.6.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.5.0/src/gameobjects/components/Health.js" data-name="v2.5.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.5.0">
//                 v2.5.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.9/src/gameobjects/components/Health.js" data-name="v2.4.9" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.9">
//                 v2.4.9
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.8/src/gameobjects/components/Health.js" data-name="v2.4.8" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.8">
//                 v2.4.8
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.7/src/gameobjects/components/Health.js" data-name="v2.4.7" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.7">
//                 v2.4.7
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.6/src/gameobjects/components/Health.js" data-name="v2.4.6" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.6">
//                 v2.4.6
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.5/src/gameobjects/components/Health.js" data-name="v2.4.5" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.5">
//                 v2.4.5
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open selected" href="https://github.com/photonstorm/phaser/tree/v2.4.4/src/gameobjects/components/Health.js" data-name="v2.4.4" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.4">
//                 v2.4.4
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.3/src/gameobjects/components/Health.js" data-name="v2.4.3" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.3">
//                 v2.4.3
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.2/src/gameobjects/components/Health.js" data-name="v2.4.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.2">
//                 v2.4.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.1/src/gameobjects/components/Health.js" data-name="v2.4.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.1">
//                 v2.4.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.0/src/gameobjects/components/Health.js" data-name="v2.4.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.0">
//                 v2.4.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.4.0a/src/gameobjects/components/Health.js" data-name="v2.4.0a" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.4.0a">
//                 v2.4.0a
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.3.0/src/gameobjects/components/Health.js" data-name="v2.3.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.3.0">
//                 v2.3.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.2.2/src/gameobjects/components/Health.js" data-name="v2.2.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.2.2">
//                 v2.2.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.2.1/src/gameobjects/components/Health.js" data-name="v2.2.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.2.1">
//                 v2.2.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.2.0/src/gameobjects/components/Health.js" data-name="v2.2.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.2.0">
//                 v2.2.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.1.3/src/gameobjects/components/Health.js" data-name="v2.1.3" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.1.3">
//                 v2.1.3
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.1.2/src/gameobjects/components/Health.js" data-name="v2.1.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.1.2">
//                 v2.1.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.1.1/src/gameobjects/components/Health.js" data-name="v2.1.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.1.1">
//                 v2.1.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.1.0/src/gameobjects/components/Health.js" data-name="v2.1.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.1.0">
//                 v2.1.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.7/src/gameobjects/components/Health.js" data-name="v2.0.7" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.7">
//                 v2.0.7
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.6/src/gameobjects/components/Health.js" data-name="v2.0.6" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.6">
//                 v2.0.6
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.5/src/gameobjects/components/Health.js" data-name="v2.0.5" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.5">
//                 v2.0.5
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.4/src/gameobjects/components/Health.js" data-name="v2.0.4" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.4">
//                 v2.0.4
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.3/src/gameobjects/components/Health.js" data-name="v2.0.3" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.3">
//                 v2.0.3
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.2/src/gameobjects/components/Health.js" data-name="v2.0.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.2">
//                 v2.0.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.1/src/gameobjects/components/Health.js" data-name="v2.0.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
//                 v2.0.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/v2.0.0/src/gameobjects/components/Health.js" data-name="v2.0.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
//                 v2.0.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/2.1.0/src/gameobjects/components/Health.js" data-name="2.1.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="2.1.0">
//                 2.1.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1.6/src/gameobjects/components/Health.js" data-name="1.1.6" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1.6">
//                 1.1.6
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1.5/src/gameobjects/components/Health.js" data-name="1.1.5" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1.5">
//                 1.1.5
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1.4/src/gameobjects/components/Health.js" data-name="1.1.4" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1.4">
//                 1.1.4
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1.3/src/gameobjects/components/Health.js" data-name="1.1.3" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1.3">
//                 1.1.3
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1.2/src/gameobjects/components/Health.js" data-name="1.1.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1.2">
//                 1.1.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1.1/src/gameobjects/components/Health.js" data-name="1.1.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1.1">
//                 1.1.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.1/src/gameobjects/components/Health.js" data-name="1.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.1">
//                 1.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0.6/src/gameobjects/components/Health.js" data-name="1.0.6" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0.6">
//                 1.0.6
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0.5/src/gameobjects/components/Health.js" data-name="1.0.5" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0.5">
//                 1.0.5
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0.4/src/gameobjects/components/Health.js" data-name="1.0.4" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0.4">
//                 1.0.4
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0.3/src/gameobjects/components/Health.js" data-name="1.0.3" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0.3">
//                 1.0.3
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0.2/src/gameobjects/components/Health.js" data-name="1.0.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0.2">
//                 1.0.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0.1/src/gameobjects/components/Health.js" data-name="1.0.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0.1">
//                 1.0.1
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/1.0/src/gameobjects/components/Health.js" data-name="1.0" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="1.0">
//                 1.0
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.7/src/gameobjects/components/Health.js" data-name="0.9.7" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.7">
//                 0.9.7
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.6/src/gameobjects/components/Health.js" data-name="0.9.6" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.6">
//                 0.9.6
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.5/src/gameobjects/components/Health.js" data-name="0.9.5" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.5">
//                 0.9.5
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.4/src/gameobjects/components/Health.js" data-name="0.9.4" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.4">
//                 0.9.4
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.3/src/gameobjects/components/Health.js" data-name="0.9.3" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.3">
//                 0.9.3
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.2/src/gameobjects/components/Health.js" data-name="0.9.2" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.2">
//                 0.9.2
//               </span>
//             </a>
//             <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/photonstorm/phaser/tree/0.9.1/src/gameobjects/components/Health.js" data-name="0.9.1" data-skip-pjax="true" rel="nofollow">
//               <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
//               <span class="select-menu-item-text css-truncate-target" title="0.9.1">
//                 0.9.1
//               </span>
//             </a>
//         </div>
//
//         <div class="select-menu-no-results">Nothing to show</div>
//       </div>
//
//     </div>
//   </div>
// </div>
//
//     <div class="BtnGroup float-right">
//       <a href="https://github.com/photonstorm/phaser/find/v2.4.4" class="js-pjax-capture-input btn btn-sm BtnGroup-item" data-pjax="" data-hotkey="t">
//         Find file
//       </a>
//       <clipboard-copy for="blob-path" aria-label="Copy file path to clipboard" class="btn btn-sm BtnGroup-item tooltipped tooltipped-s" copied-label="Copied!" tabindex="0" role="button">
//         Copy path
//       </clipboard-copy>
//     </div>
//     <div id="blob-path" class="breadcrumb">
//       <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="https://github.com/photonstorm/phaser/tree/v2.4.4"><span>phaser</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="https://github.com/photonstorm/phaser/tree/v2.4.4/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="https://github.com/photonstorm/phaser/tree/v2.4.4/src/gameobjects"><span>gameobjects</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="https://github.com/photonstorm/phaser/tree/v2.4.4/src/gameobjects/components"><span>components</span></a></span><span class="separator">/</span><strong class="final-path">Health.js</strong>
//     </div>
//   </div>
//
//
//
//
//   <div class="commit-tease">
//       <span class="float-right">
//         <a class="commit-tease-sha" href="https://github.com/photonstorm/phaser/commit/8cf28fede721e1ffeb25b80b9bacfb6dbf4a6165" data-pjax="">
//           8cf28fe
//         </a>
//         <relative-time datetime="2015-06-17T01:00:04Z" title="Jun 16, 2015, 9:00 PM EDT">on Jun 16, 2015</relative-time>
//       </span>
//       <div>
//         <img class="avatar" src="./phaser_Health_files/164476" width="20" height="20" alt="@photonstorm" data-hovercard-user-id="164476">
//         <a class="user-mention" rel="author" href="https://github.com/photonstorm">photonstorm</a>
//           <a data-pjax="true" title="maxHealth is a new property that Game Objects with the Health component receive and works in combination with the `heal` method to ensure a health limit cap." class="message" href="https://github.com/photonstorm/phaser/commit/8cf28fede721e1ffeb25b80b9bacfb6dbf4a6165">maxHealth is a new property that Game Objects with the Health compone…</a>
//       </div>
//
//     <div class="commit-tease-contributors">
//       <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
//         <strong>3</strong>
//          contributors
//       </button>
//           <a class="avatar-link tooltipped tooltipped-s" aria-label="photonstorm" href="https://github.com/photonstorm/phaser/commits/v2.4.4/src/gameobjects/components/Health.js?author=photonstorm"><img class="avatar" src="./phaser_Health_files/164476" width="20" height="20" alt="@photonstorm" data-hovercard-user-id="164476"> </a>
//     <a class="avatar-link tooltipped tooltipped-s" aria-label="stephandesouza" href="https://github.com/photonstorm/phaser/commits/v2.4.4/src/gameobjects/components/Health.js?author=stephandesouza"><img class="avatar" src="./phaser_Health_files/159077" width="20" height="20" alt="@stephandesouza" data-hovercard-user-id="159077"> </a>
//     <a class="avatar-link tooltipped tooltipped-s" aria-label="pnstickne" href="https://github.com/photonstorm/phaser/commits/v2.4.4/src/gameobjects/components/Health.js?author=pnstickne"><img class="avatar" src="./phaser_Health_files/1430176" width="20" height="20" alt="@pnstickne" data-hovercard-user-id="1430176"> </a>
//
//
//     </div>
//
//     <div id="blob_contributors_box" style="display:none">
//       <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
//       <ul class="facebox-user-list" data-facebox-id="facebox-description">
//           <li class="facebox-user-list-item">
//             <img src="./phaser_Health_files/164476(1)" width="24" height="24" alt="@photonstorm" data-hovercard-user-id="164476">
//             <a data-hovercard-user-id="164476" href="https://github.com/photonstorm" aria-describedby="hovercard-aria-description">photonstorm</a>
//           </li>
//           <li class="facebox-user-list-item">
//             <img src="./phaser_Health_files/159077(1)" width="24" height="24" alt="@stephandesouza" data-hovercard-user-id="159077">
//             <a data-hovercard-user-id="159077" href="https://github.com/stephandesouza" aria-describedby="hovercard-aria-description">stephandesouza</a>
//           </li>
//           <li class="facebox-user-list-item">
//             <img src="./phaser_Health_files/1430176(1)" width="24" height="24" alt="@pnstickne" data-hovercard-user-id="1430176">
//             <a data-hovercard-user-id="1430176" href="https://github.com/pnstickne" aria-describedby="hovercard-aria-description">pnstickne</a>
//           </li>
//       </ul>
//     </div>
//   </div>
//
//
//   <div class="file">
//     <div class="file-header">
//   <div class="file-actions">
//
//     <div class="BtnGroup">
//       <a id="raw-url" class="btn btn-sm BtnGroup-item" href="https://github.com/photonstorm/phaser/raw/v2.4.4/src/gameobjects/components/Health.js">Raw</a>
//         <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="https://github.com/photonstorm/phaser/blame/v2.4.4/src/gameobjects/components/Health.js">Blame</a>
//       <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="https://github.com/photonstorm/phaser/commits/v2.4.4/src/gameobjects/components/Health.js">History</a>
//     </div>
//
//         <button class="btn-octicon disabled tooltipped tooltipped-nw" type="button" disabled="" aria-label="You must be on a branch to open this file in GitHub Desktop">
//             <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
//         </button>
//
//         <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw" aria-label="You must be on a branch to make or propose changes to this file">
//           <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
//         </button>
//         <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw" aria-label="You must be on a branch to make or propose changes to this file">
//           <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
//         </button>
//   </div>
//
//   <div class="file-info">
//       86 lines (70 sloc)
//       <span class="file-info-divider"></span>
//     2.11 KB
//   </div>
// </div>
//
//
//
//   <div itemprop="text" class="blob-wrapper data type-javascript">
//       <table class="highlight tab-size js-file-line-container" data-tab-size="4">
//       <tbody><tr>
//         <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
//         <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
//       </tr>
//       <tr>
//         <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
//         <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* <span class="pl-k">@author</span>       <span class="pl-en">Richard Davey </span>&lt;<span class="pl-c1">rich@photonstorm.com</span>&gt;</span></td>
//       </tr>
//       <tr>
//         <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
//         <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* <span class="pl-k">@copyright</span>    2015 Photon Storm Ltd.</span></td>
//       </tr>
//       <tr>
//         <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
//         <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* <span class="pl-k">@license</span>      <span class="pl-smi">{@link</span> https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}</span></td>
//       </tr>
//       <tr>
//         <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
//         <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
//       </tr>
//       <tr>
//         <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
//         <td id="LC6" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
//         <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
//       </tr>
//       <tr>
//         <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
//         <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* The Health component provides the ability for Game Objects to have a `health` property </span></td>
//       </tr>
//       <tr>
//         <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
//         <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* that can be damaged and reset through game code.</span></td>
//       </tr>
//       <tr>
//         <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
//         <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Requires the LifeSpan component.</span></td>
//       </tr>
//       <tr>
//         <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
//         <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
//       </tr>
//       <tr>
//         <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
//         <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* <span class="pl-k">@class</span></span></td>
//       </tr>
//       <tr>
//         <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
//         <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
//       </tr>
//       <tr>
//         <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
//         <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Phaser</span>.<span class="pl-smi">Component</span>.<span class="pl-en">Health</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {};</td>
//       </tr>
//       <tr>
//         <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
//         <td id="LC15" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
//         <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Phaser</span>.<span class="pl-smi">Component</span>.<span class="pl-smi">Health</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> {</td>
//       </tr>
//       <tr>
//         <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
//         <td id="LC17" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
//         <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
//       </tr>
//       <tr>
//         <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
//         <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * The Game Objects health value. This is a handy property for setting and manipulating health on a Game Object.</span></td>
//       </tr>
//       <tr>
//         <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
//         <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * </span></td>
//       </tr>
//       <tr>
//         <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
//         <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * It can be used in combination with the `damage` method or modified directly.</span></td>
//       </tr>
//       <tr>
//         <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
//         <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * </span></td>
//       </tr>
//       <tr>
//         <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
//         <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@property</span> <span class="pl-en">{number}</span> <span class="pl-smi">health</span></span></td>
//       </tr>
//       <tr>
//         <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
//         <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@default</span></span></td>
//       </tr>
//       <tr>
//         <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
//         <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
//       </tr>
//       <tr>
//         <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
//         <td id="LC26" class="blob-code blob-code-inner js-file-line">    health<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
//       </tr>
//       <tr>
//         <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
//         <td id="LC27" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
//         <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
//       </tr>
//       <tr>
//         <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
//         <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * The Game Objects maximum health value. This works in combination with the `heal` method to ensure</span></td>
//       </tr>
//       <tr>
//         <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
//         <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * the health value never exceeds the maximum.</span></td>
//       </tr>
//       <tr>
//         <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
//         <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * </span></td>
//       </tr>
//       <tr>
//         <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
//         <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@property</span> <span class="pl-en">{number}</span> <span class="pl-smi">maxHealth</span></span></td>
//       </tr>
//       <tr>
//         <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
//         <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@default</span></span></td>
//       </tr>
//       <tr>
//         <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
//         <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
//       </tr>
//       <tr>
//         <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
//         <td id="LC35" class="blob-code blob-code-inner js-file-line">    maxHealth<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
//       </tr>
//       <tr>
//         <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
//         <td id="LC36" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
//         <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
//       </tr>
//       <tr>
//         <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
//         <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * Damages the Game Object. This removes the given amount of health from the `health` property.</span></td>
//       </tr>
//       <tr>
//         <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
//         <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * </span></td>
//       </tr>
//       <tr>
//         <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
//         <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * If health is taken below or is equal to zero then the `kill` method is called.</span></td>
//       </tr>
//       <tr>
//         <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
//         <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    *</span></td>
//       </tr>
//       <tr>
//         <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
//         <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@member</span></span></td>
//       </tr>
//       <tr>
//         <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
//         <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">amount</span> - The amount to subtract from the current `health` value.</span></td>
//       </tr>
//       <tr>
//         <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
//         <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> <span class="pl-en">{Phaser.Sprite}</span> This instance.</span></td>
//       </tr>
//       <tr>
//         <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
//         <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
//       </tr>
//       <tr>
//         <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
//         <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">damage</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">amount</span>) {</td>
//       </tr>
//       <tr>
//         <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
//         <td id="LC47" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
//         <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">alive</span>)</td>
//       </tr>
//       <tr>
//         <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
//         <td id="LC49" class="blob-code blob-code-inner js-file-line">        {</td>
//       </tr>
//       <tr>
//         <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
//         <td id="LC50" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">health</span> <span class="pl-k">-=</span> amount;</td>
//       </tr>
//       <tr>
//         <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
//         <td id="LC51" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
//         <td id="LC52" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">health</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span>)</td>
//       </tr>
//       <tr>
//         <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
//         <td id="LC53" class="blob-code blob-code-inner js-file-line">            {</td>
//       </tr>
//       <tr>
//         <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
//         <td id="LC54" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">kill</span>();</td>
//       </tr>
//       <tr>
//         <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
//         <td id="LC55" class="blob-code blob-code-inner js-file-line">            }</td>
//       </tr>
//       <tr>
//         <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
//         <td id="LC56" class="blob-code blob-code-inner js-file-line">        }</td>
//       </tr>
//       <tr>
//         <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
//         <td id="LC57" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
//         <td id="LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
//       </tr>
//       <tr>
//         <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
//         <td id="LC59" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
//         <td id="LC60" class="blob-code blob-code-inner js-file-line">    },</td>
//       </tr>
//       <tr>
//         <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
//         <td id="LC61" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
//         <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
//       </tr>
//       <tr>
//         <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
//         <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * Heal the Game Object. This adds the given amount of health to the `health` property.</span></td>
//       </tr>
//       <tr>
//         <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
//         <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    *</span></td>
//       </tr>
//       <tr>
//         <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
//         <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@member</span></span></td>
//       </tr>
//       <tr>
//         <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
//         <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">amount</span> - The amount to add to the current `health` value. The total will never exceed `maxHealth`.</span></td>
//       </tr>
//       <tr>
//         <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
//         <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> <span class="pl-en">{Phaser.Sprite}</span> This instance.</span></td>
//       </tr>
//       <tr>
//         <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
//         <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
//       </tr>
//       <tr>
//         <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
//         <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">heal</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">amount</span>) {</td>
//       </tr>
//       <tr>
//         <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
//         <td id="LC70" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
//         <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">alive</span>)</td>
//       </tr>
//       <tr>
//         <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
//         <td id="LC72" class="blob-code blob-code-inner js-file-line">        {</td>
//       </tr>
//       <tr>
//         <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
//         <td id="LC73" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">health</span> <span class="pl-k">+=</span> amount;</td>
//       </tr>
//       <tr>
//         <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
//         <td id="LC74" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
//         <td id="LC75" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">health</span> <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">maxHealth</span>)</td>
//       </tr>
//       <tr>
//         <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
//         <td id="LC76" class="blob-code blob-code-inner js-file-line">            {</td>
//       </tr>
//       <tr>
//         <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
//         <td id="LC77" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">health</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">maxHealth</span>;</td>
//       </tr>
//       <tr>
//         <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
//         <td id="LC78" class="blob-code blob-code-inner js-file-line">            }</td>
//       </tr>
//       <tr>
//         <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
//         <td id="LC79" class="blob-code blob-code-inner js-file-line">        }</td>
//       </tr>
//       <tr>
//         <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
//         <td id="LC80" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
//         <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
//       </tr>
//       <tr>
//         <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
//         <td id="LC82" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
//         <td id="LC83" class="blob-code blob-code-inner js-file-line">    }</td>
//       </tr>
//       <tr>
//         <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
//         <td id="LC84" class="blob-code blob-code-inner js-file-line">
// </td>
//       </tr>
//       <tr>
//         <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
//         <td id="LC85" class="blob-code blob-code-inner js-file-line">};</td>
//       </tr>
// </tbody></table>
//
//   <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
//     <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
//       <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
//     </button>
//     <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
//       <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
//         <li><clipboard-copy class="dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines" tabindex="0" role="button">Copy lines</clipboard-copy></li>
//         <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink" tabindex="0" role="button">Copy permalink</clipboard-copy></li>
//         <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="https://github.com/photonstorm/phaser/blame/c9c85330ab60547b39ba4c9400c258ed7fb2a317/src/gameobjects/components/Health.js">View git blame</a></li>
//           <li><a class="dropdown-item" id="js-new-issue" href="https://github.com/photonstorm/phaser/issues/new">Open new issue</a></li>
//       </ul>
//     </div>
//   </div>
//
//   </div>
//
//   </div>
//
//   <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
//   <div id="jump-to-line" style="display:none">
//     <!-- '"` --><!-- </textarea></xmp> --><form class="js-jump-to-line-form" action="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
//       <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line…" aria-label="Jump to line" autofocus="">
//       <button type="submit" class="btn">Go</button>
// </form>  </div>
//
//
//   </div>
//   <div class="modal-backdrop js-touch-events"></div>
// </div>
//
//     </div>
//   </div>
//
//   </div>
//
//
// <div class="footer container-lg px-3" role="contentinfo">
//   <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
//     <ul class="list-style-none d-flex flex-wrap ">
//       <li class="mr-3">© 2018 <span title="0.64496s from unicorn-2520026066-sr784">GitHub</span>, Inc.</li>
//         <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
//         <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
//         <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
//         <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
//         <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com/">Help</a></li>
//     </ul>
//
//     <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com/">
//       <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
// </a>
//    <ul class="list-style-none d-flex flex-wrap ">
//         <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
//       <li class="mr-3"><a href="https://developer.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
//       <li class="mr-3"><a href="https://training.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
//       <li class="mr-3"><a href="https://shop.github.com/" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
//         <li class="mr-3"><a data-ga-click="Footer, go to blog, text:blog" href="https://github.com/blog">Blog</a></li>
//         <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
//
//     </ul>
//   </div>
//   <div class="d-flex flex-justify-center pb-6">
//     <span class="f6 text-gray-light"></span>
//   </div>
// </div>
//
//
//
//   <div id="ajax-error-message" class="ajax-error-message flash flash-error">
//     <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
//     <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
//       <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
//     </button>
//     You can't perform that action at this time.
//   </div>
//
//
//
//     <script crossorigin="anonymous" integrity="sha512-x22YedMkz1jh52/cvt2qKiIiZ/QCO7VaVLVCu/mgux6Bpetk8BNH7a4zFY6/JJJa1kPbKFbNmPAEaZoxLRd0Bg==" type="application/javascript" src="./phaser_Health_files/frameworks-12e57c25302f5eb2959a90a13ec54bad.js.download"></script>
//
//     <script crossorigin="anonymous" async="async" integrity="sha512-CTlEs1npEYI8xR1DgnsmuSEXsxkBBiXJDby7KeqNsArfMnzdYlxH4zXlDGqe5eBodF96gnFmXQ8Sm7dwCrOWvg==" type="application/javascript" src="./phaser_Health_files/github-dbbab75be13d77cc82821ddf60806340.js.download"></script>
//
//
//
//
//   <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
//     <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
//     <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js">Reload</a> to refresh your session.</span>
//     <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="https://github.com/photonstorm/phaser/blob/v2.4.4/src/gameobjects/components/Health.js">Reload</a> to refresh your session.</span>
//   </div>
//   <div class="facebox" id="facebox" style="display:none;">
//   <div class="facebox-popup">
//     <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
//     </div>
//     <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
//       <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
//     </button>
//   </div>
// </div>
//
//   <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
//   <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;"></div>
// </div>
//
// <div id="hovercard-aria-description" class="sr-only">
//   Press h to open a hovercard with more details.
// </div>
//
//
//
//
//
// </body></html>
