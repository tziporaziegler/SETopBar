// ==UserScript==
// @name        SETopBar
// @namespace   https://github.com/tziporaziegler/SETopBar/
// @description A user script for styling the Stack Exchange Network top-bar
// @author      Tzipora Ziegler
// @include     http://stackoverflow.com/*
// @include     http://meta.stackoverflow.com/*
// @include     *.stackexchange.com/*
// @version     1.0
// ==/UserScript==

(function() {
    //Remove Tags tab
    $('#nav-tags').parent().remove();

    //Remove beta badge from Documentation tab
    $('small.beta-badge').remove();

    //Rename Documentation tab to Docs
    $('#nav-docs').text('Docs');
})();


function addGlobalStyle(css) {
    var head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//Change background and border color to grey. Reduce box-shadow.
addGlobalStyle ( 
    'header.so-header.js-so-header{ background-color:#f3f3f3; box-shadow:0 1px 0 rgba(12,13,14,0.1), 0 0 1px rgba(12,13,14,0.2) }' 
);

//Change scrolling border to same grey and box-shadow as above
addGlobalStyle ( 
    '.so-header._fixed._scrolling { box-shadow:0 1px 0 rgba(12,13,14,0.1), 0 0 1px rgba(12,13,14,0.2) }' 
);

//Remove Tags tab
addGlobalStyle (
    '#nav-tags{ display:none; }'
);

//Reduce spacing needed for sticky top-bar
addGlobalStyle (
    '.so-header~.container { padding-top: 43px; }'    
);

//Make Search Bar shorter
addGlobalStyle (
  '.so-header .searchbar input[type="text"].f-input { height: 32px; }'
);

//The next three styles make the entire top-bar shorter
addGlobalStyle (
    '.so-header .my-profile { padding:13px 10px; }'
);

addGlobalStyle (
    '.so-header .navigation .-list,' +
    '.so-header .navigation .-link,' +
    '.so-header .secondary-nav .-list,' +
    '.so-header .secondary-nav .-link,' +
    '.so-header .-logo { height:40px }'
);

addGlobalStyle (
    '.so-header .navigation .-link, .so-header .secondary-nav .-link { line-height:40px }'
);
