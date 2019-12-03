






<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-/YEVWs7BzxfKyUd6zVxjEQcXRWsLbcEjv045Rq8DSoipySmQblhVKxlXLva2GtNd5DhwCxHwW1RM0N9I7S2Vew==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-481a47a96965f6706fb41bae0d14b09a.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-xod5+iick6st6a0tvmfiqwCFLFTRzOkGLX0SAqY7SQFl0Q3sWxKUB2rm1Kw4Vz/57FMg7chtfVYeUB/Yr/xmFQ==" rel="stylesheet" href="https://github.githubassets.com/assets/site-d3c48f1b58ea95d9efb184fd4592b411.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-xlKdcTpXrrd+rLG1h8yYl5yt/S94zWLil75KS5529Mf0/RdApUbGTKcFbY0OZMotEz3l11k0GqfDAhasayWehw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-eabfbaded2e91939e805d1a3af34018a.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>variation-switcher.js · GitHub</title>
    <meta name="description" content="GitHub Gist: instantly share code, notes, and snippets.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch-gist.xml" title="Gist">
  <link rel="fluid-icon" href="https://gist.github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://github.githubassets.com/images/modules/gists/gist-og-image.png" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="variation-switcher.js" /><meta name="twitter:description" content="GitHub Gist: instantly share code, notes, and snippets." />
    <meta property="og:image" content="https://github.githubassets.com/images/modules/gists/gist-og-image.png" /><meta property="og:site_name" content="Gist" /><meta property="og:type" content="article" /><meta property="og:title" content="variation-switcher.js" /><meta property="og:url" content="https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1" /><meta property="og:description" content="GitHub Gist: instantly share code, notes, and snippets." /><meta property="article:author" content="262588213843476" /><meta property="article:publisher" content="262588213843476" />

  <link rel="assets" href="https://github.githubassets.com/">
  
  

    <meta name="request-id" content="E88A:7630:14A996D:154152C:5DE6A6AB" data-pjax-transient>


  

  <meta name="selected-link" value="gist_code" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

    <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="gist" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E88A:7630:14A996D:154152C:5DE6A6AB" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="5723941455687859590" />

<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;gist-id&gt;" data-pjax-transient="true" />





<meta class="js-ga-set" name="dimension1" content="Logged Out">



    <meta name="octolytics-dimension-public" content="true" /><meta name="octolytics-dimension-gist_id" content="59159288" /><meta name="octolytics-dimension-gist_name" content="cfeb8ba815fb1a44a78bfad241956cd1" /><meta name="octolytics-dimension-anonymous" content="false" /><meta name="octolytics-dimension-owner_id" content="11555285" /><meta name="octolytics-dimension-owner_login" content="robhob" /><meta name="octolytics-dimension-forked" content="false" />

  <meta
    class="js-ga-set"
    name="dimension5"
    content="public"
  >
  <meta
    class="js-ga-set"
    name="dimension6"
    content="owned"
  >
  <meta
    class="js-ga-set"
    name="dimension7"
    content="javascript"
  >


      <meta name="hostname" content="gist.github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="gist.github.com">

      <meta name="js-proxy-site-detection-payload" content="NjlhZWUyZjIwNDBhZWQ0OTZjZjk0NzI0N2U2NjIzMDcwNTVlZTI3Y2VmN2M5MDNhYmY2YzEwZTlhODgxNGU3MHx7InJlbW90ZV9hZGRyZXNzIjoiMTY2LjEyMi4yMDUuMTAwIiwicmVxdWVzdF9pZCI6IkU4OEE6NzYzMDoxNEE5OTZEOjE1NDE1MkM6NURFNkE2QUIiLCJ0aW1lc3RhbXAiOjE1NzUzOTcwNjAsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS">

    <meta name="html-safe-nonce" content="dc4a5201a627a48aa3167f9377db2e2447a7a558">

  <meta http-equiv="x-pjax-version" content="c04010d85a6af48f49223a7e95dff51c">
  

      <link href="/robhob.atom" rel="alternate" title="atom" type="application/atom+xml">

  <link crossorigin="anonymous" media="all" integrity="sha512-eugfgjBp0ZgIOWm2vVumT2BtsOo+aZto75qwqV3mlYwSC8XIXu6PRH6hh5ms6HN2RbBii0M8cnK9UuJLO3Cyew==" rel="stylesheet" href="https://github.githubassets.com/assets/gist-04c9f30b6b426947b013a993ce8747c8.css" />




  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">






  </head>

  <body class="logged-out env-production emoji-size-boost min-width-lg">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


        <div class="Header" role="banner" >
  <div class="Header-item">
    <a class="Header-link" data-hotkey="g d" aria-label="Gist Homepage" href="/">
  <svg class="octicon octicon-mark-github v-align-middle d-none" height="24" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
  <svg height="24" class="octicon octicon-logo-github v-align-middle" viewBox="0 0 45 16" version="1.1" width="67" aria-hidden="true"><path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"/></svg>
  <svg height="24" class="octicon octicon-logo-gist v-align-middle" viewBox="0 0 25 16" version="1.1" width="37" aria-hidden="true"><path fill-rule="evenodd" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"/></svg>
</a>
  </div>


  <div class="Header-item Header-item--full js-site-search">
      <div class="header-search mr-3">

<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative js-quicksearch-form" role="search" aria-label="Site" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
  <div class="header-search-wrapper form-control input-sm js-chromeless-input-container">
    <input type="text"
      class="form-control input-sm js-site-search-focus header-search-input"
      data-hotkey="s,/"
      name="q"
      aria-label="Search"
      placeholder="Search…"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off">
  </div>

</form></div>


    <nav aria-label="Global" class="d-flex">
  <a class="Header-link mr-3" data-ga-click="Header, go to all gists, text:all gists" href="/discover">All gists</a>

  <a class="Header-link mr-3" data-ga-click="Header, go to GitHub, text:Back to GitHub" href="https://github.com">Back to GitHub</a>



</nav>

  </div>




    <div class="Header-item f4 mr-0" role="navigation">
      <a class="HeaderMenu-link no-underline mr-3" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="bff90d3483390fd7446ec4fc86394603d2ace53e881e33c67556fdc8df1db1a4" data-ga-click="Header, sign in" href="https://gist.github.com/auth/github?return_to=https%3A%2F%2Fgist.github.com%2Frobhob%2Fcfeb8ba815fb1a44a78bfad241956cd1">
        Sign&nbsp;in
</a>        <a class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b9c2d214eaf7a67f17edeedb13a028c9e63f916a780238de38290edca9b0d6d4" data-ga-click="Header, sign up" href="/join?source=header-gist">
          Sign&nbsp;up
</a>    </div>
</div>



  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/Code">
    <main id="gist-pjax-container" class="gist-content-wrapper" data-pjax-container>
      


  <div class="gist-detail-intro gist-banner">
    <div class="container-lg px-3">
      <p class="lead">
        Instantly share code, notes, and snippets.
      </p>
    </div>
  </div>


<div class="gisthead pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-3 mb-4">
  <div class="container-lg px-3">
    
  


<div class="mb-3 d-flex">
  <h1 class="public css-truncate float-none flex-auto width-fit pl-0">
    <a class="avatar mr-1" data-hovercard-type="user" data-hovercard-url="/users/robhob/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/robhob"><img src="https://avatars1.githubusercontent.com/u/11555285?s=52&amp;v=4" width="26" height="26" alt="@robhob" /></a>
    <span class="author"><a data-hovercard-type="user" data-hovercard-url="/users/robhob/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/robhob">robhob</a></span><!--
        --><span class="path-divider">/</span><!--
        --><strong itemprop="name" class="css-truncate-target" style="max-width: 410px"><a href="/robhob/cfeb8ba815fb1a44a78bfad241956cd1">variation-switcher.js</a></strong>

    <div class="d-block text-small text-gray">
      Last active <time-ago datetime="2017-07-15T11:50:37Z" class="no-wrap">Jul 15, 2017</time-ago>
    </div>
  </h1>

  <ul class="pagehead-actions float-none">



    <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to star a gist" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist star button&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f107204d052e7a6478c0b72e5cedb60ecdd0fa899576f70215a86227686a087f" href="/login?return_to=https%3A%2F%2Fgist.github.com%2Frobhob%2Fcfeb8ba815fb1a44a78bfad241956cd1">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
    Star
</a>
  <a class="social-count" aria-label="0 users starred this gist" href="/robhob/cfeb8ba815fb1a44a78bfad241956cd1/stargazers">
    0
</a>
    </li>

      <li>
          <a class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to fork a gist" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist fork button&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="57cb8972b042b07e880cb5c91d9a417cf97767c58be19314d34a81210f71485e" href="/login?return_to=https%3A%2F%2Fgist.github.com%2Frobhob%2Fcfeb8ba815fb1a44a78bfad241956cd1">
    <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
    Fork
</a>    <span class="social-count">0</span>

      </li>
  </ul>

</div>

<div class="d-flex">
  <div class="flex-auto">
    <nav class="reponav js-repo-nav js-sidenav-container-pjax"
     aria-label="Gist"
     data-pjax="#gist-pjax-container">

  <a class="js-selected-navigation-item selected reponav-item" data-pjax="true" data-hotkey="g c" aria-current="page" data-selected-links="gist_code /robhob/cfeb8ba815fb1a44a78bfad241956cd1" href="/robhob/cfeb8ba815fb1a44a78bfad241956cd1">
    <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
    Code
</a>
    <a class="js-selected-navigation-item reponav-item" data-pjax="true" data-hotkey="g r" data-selected-links="gist_revisions /robhob/cfeb8ba815fb1a44a78bfad241956cd1/revisions" href="/robhob/cfeb8ba815fb1a44a78bfad241956cd1/revisions">
      <svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"/></svg>
      Revisions
      <span class="Counter">5</span>
</a>

</nav>

  </div>

  <div class="file-navigation-options" data-multiple>

    <div class="file-navigation-option v-align-middle">

  <div class="input-group">
    <div class="input-group-button">
      <details class="details-reset details-overlay select-menu">
        <summary class="btn btn-sm select-menu-button" data-ga-click="Repository, clone Embed, location:repo overview">
          <span data-menu-button>Embed</span>
        </summary>
        <details-menu
          class="select-menu-modal position-absolute"
          data-menu-input="gist-share-url"
          style="z-index: 99;" aria-label="Clone options">
          <div class="select-menu-header">
            <span class="select-menu-title">What would you like to do?</span>
          </div>
          <div class="select-menu-list">
              <button name="button" type="button" class="select-menu-item width-full" aria-checked="true" role="menuitemradio" value="&lt;script src=&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1.js&quot;&gt;&lt;/script&gt;" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;EMBED&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:59159288,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fdead74929c558d1d5253a51fc1ab21e3b01b669e637c5016a9a99bf08805a47">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    
                    Embed
                  </span>
                    <span class="description">
                      Embed this gist in your website.
                    </span>
                </div>
</button>              <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;SHARE&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:59159288,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="d3fe0429f72c57dec1cc6e0b1bab057919627f60bcc1138aecb390c795aa2f5b">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    
                    Share
                  </span>
                    <span class="description">
                      Copy sharable link for this gist.
                    </span>
                </div>
</button>              <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="https://gist.github.com/cfeb8ba815fb1a44a78bfad241956cd1.git" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:59159288,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="56cdd7185e50c794c23a3cb493c6ab829e520ee1c126ccc2f230c0bfbb5daafb">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    Clone via
                    HTTPS
                  </span>
                    <span class="description">
                      Clone with Git or checkout with SVN using the repository’s web address.
                    </span>
                </div>
</button>          </div>
          <div class="select-menu-list">
            <a role="menuitem" class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
              <svg class="octicon octicon-question select-menu-item-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
              <div class="select-menu-item-text">
                Learn more about clone URLs
              </div>
            </a>
          </div>
        </details-menu>
      </details>
    </div>

    <input
      id="gist-share-url"
      type="text"
      data-autoselect
      class="form-control input-monospace input-sm"
      value="&lt;script src=&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1.js&quot;&gt;&lt;/script&gt;"
      aria-label="Clone this repository at &lt;script src=&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1.js&quot;&gt;&lt;/script&gt;"
      readonly>

    <div class="input-group-button">
      <clipboard-copy for="gist-share-url" aria-label="Copy to clipboard" class="btn btn-sm zeroclipboard-button" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:59159288,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b671a522157740a83a9ed035d8c8fd7e2233caef23b54c14a25b822dd0cd215a"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></clipboard-copy>
    </div>
  </div>
</div>


    <div class="file-navigation-option">
    <a class="btn btn-sm tooltipped tooltipped-s tooltipped-multiline" aria-label="Save robhob/cfeb8ba815fb1a44a78bfad241956cd1 to your computer and use it in GitHub Desktop." data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;OPEN_IN_DESKTOP&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:59159288,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6c4c34691152b7e3bb3988240e0792bde2c88eacd8da5e773b858671ff8e27ae" href="https://desktop.github.com"><svg class="octicon octicon-desktop-download" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"/></svg></a>
</div>


    <div class="file-navigation-option">
      <a class="btn btn-sm" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:59159288,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c098f33c37eafdfae5d7d72e548e122a30d2fee343c83995bbbc96968cbf717a" data-ga-click="Gist, download zip, location:gist overview" href="/robhob/cfeb8ba815fb1a44a78bfad241956cd1/archive/66922baae0a7ef79916b1b8d71e64dae22dd1c5d.zip">Download ZIP</a>
    </div>
  </div>
</div>


  </div>
</div>

<div class="container-lg px-3 new-discussion-timeline experiment-repo-nav">
  <div class="repository-content gist-content">
    
  <div>
    

        <div class="js-gist-file-update-container js-task-list-container file-box">
  <div id="file-variation-switcher-js" class="file">
      <div class="file-header">
        <div class="file-actions">

          <a class="btn btn-sm " href="/robhob/cfeb8ba815fb1a44a78bfad241956cd1/raw/66922baae0a7ef79916b1b8d71e64dae22dd1c5d/variation-switcher.js">Raw</a>
        </div>
        <div class="file-info">
          <span class="icon">
            <svg class="octicon octicon-gist" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"/></svg>
          </span>
          <a class="css-truncate" href="#file-variation-switcher-js">
            <strong class="user-select-contain gist-blob-name css-truncate-target">
              variation-switcher.js
            </strong>
          </a>
        </div>
      </div>
    

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="file-variation-switcher-js-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-variation-switcher-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">&lt;</span>script type<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>text/javascript<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-variation-switcher-js-LC2" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-variation-switcher-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">showImage</span>(<span class="pl-smi">imgPath</span>, <span class="pl-smi">imgText</span>) {</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-variation-switcher-js-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> curImage <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>currentImg<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-variation-switcher-js-LC5" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-variation-switcher-js-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">curImage</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> imgPath;</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-variation-switcher-js-LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">curImage</span>.<span class="pl-c1">alt</span> <span class="pl-k">=</span> imgText;</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-variation-switcher-js-LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">curImage</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> imgText;</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-variation-switcher-js-LC9" class="blob-code blob-code-inner js-file-line"> }</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="file-variation-switcher-js-LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="file-variation-switcher-js-L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="file-variation-switcher-js-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">&lt;</span><span class="pl-k">/</span>script<span class="pl-k">&gt;</span></td>
      </tr>
</table>


  </div>

  </div>
</div>


    <a name="comments"></a>
    <div class="js-quote-selection-container" data-quote-markdown=".js-comment-body">
      <div class="js-discussion js-socket-channel" data-channel="marked-as-read:gist:59159288">
        <div class="ml-6 pl-3">
          

<!-- Rendered timeline since 2017-07-15 04:50:37 -->
<div id="partial-timeline-marker"
      class="js-timeline-marker js-updatable-content"
      data-url="/robhob/cfeb8ba815fb1a44a78bfad241956cd1/show_partial?partial=gist%2Ftimeline_marker&amp;since=1500119437"
      data-last-modified="Sat, 15 Jul 2017 11:50:37 GMT"
      >
</div>

        </div>

        <div class="discussion-timeline-actions">
            
<div class="flash flash-warn mt-3">
    <a rel="nofollow" class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;signed out comment&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="59eae1ef80a44c341d6ab71d27e4c493ab62f4c64f35fc7246039de8dc83b356" href="/join?source=comment-gist">Sign up for free</a>
    <strong>to join this conversation on GitHub</strong>.
    Already have an account?
    <a rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;signed out comment&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1332708973.1567112582&quot;,&quot;originating_request_id&quot;:&quot;E88A:7630:14A996D:154152C:5DE6A6AB&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/robhob/cfeb8ba815fb1a44a78bfad241956cd1&quot;,&quot;referrer&quot;:&quot;https://gist.github.com/robhob?page=4&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7eceec1a6f443af1233db47f217bbaae82bb101ef363994e1da4bf94cf9a679f" href="/login?return_to=https%3A%2F%2Fgist.github.com%2Frobhob%2Fcfeb8ba815fb1a44a78bfad241956cd1">Sign in to comment</a>
</div>

        </div>
      </div>
    </div>
</div>
  </div>
</div><!-- /.container -->

    </main>
  </div>

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 GitHub, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    
    
    
    
      <script crossorigin="anonymous" async="async" integrity="sha512-0OwtUmcCJxdfgy3/wGRVhjLdSheK08l4Je8AKfJRhfCJWtMSXUhn+/C9DH+8/9byBcwiQUuCKazNtTHvLaaA3Q==" type="application/javascript" src="https://github.githubassets.com/assets/gist-bootstrap-d0ec2d52.js"></script>

    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

