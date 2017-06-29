// ==UserScript==
// @name        SETopBar
// @namespace   https://github.com/tziporaziegler/SETopBar/
// @description A user script for styling the Stack Exchange Network top-bar
// @author      Tzipora Ziegler
// @include     https://stackoverflow.com/*
// @include     https://meta.stackoverflow.com/*
//// @include     *.stackexchange.com/*
// @version     1.0.6
// @run-at document-body
// ==/UserScript==

(function() {
    //Remove Tags tab
    $('#nav-tags').parent().remove();

    //Remove beta badge from Documentation tab
    $('small.beta-badge').remove();

    //Set the Jobs tab name back to plain Jobs
    $('#nav-jobs').text('Jobs');

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
    'header.so-header.js-so-header{ background-color:#f4f4f4; box-shadow:0 1px 0 rgba(12,13,14,0.1), 0 0 1px rgba(12,13,14,0.2) }'
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
    '.so-header~.container { padding-top: 45px; }'
);

//Make Search Bar shorter
addGlobalStyle (
    '.so-header .searchbar input[type="text"].f-input, .so-header .searchbar .btn { height: 32px; }'
);

//The remaining styles make the entire top-bar shorter
addGlobalStyle (
    '.so-header { height:48px; }'
);

addGlobalStyle (
    '.so-header .navigation .-list,' +
    '.so-header .navigation .-link,' +
    '.so-header .secondary-nav .-list,' +
    '.so-header .secondary-nav .-link,' +
    '.so-header .-logo { height:35px }'
);

addGlobalStyle (
    '.so-header .navigation .-link, .so-header .secondary-nav .-link { line-height:35px }'
);

//Set the profile area padding to be match the rest of the top-bar elements
//This becomes noticable on hover
addGlobalStyle (
    '.so-header .my-profile { padding:8px 10px; }'
);

//Hide suggested edits review queue number
addGlobalStyle (
    '.indicator-badge.js-unread-count._reviews { display: none }'
);
