'use strict';
require ('./css/main');
import $ from 'jquery';

function drawLogo() {
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
    'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
}

var path = document.querySelector('.path-1');
drawLogo();

var path = document.querySelector('.path-2');
drawLogo();

var path = document.querySelector('.path-3');
drawLogo();

var path = document.querySelector('.path-4');
drawLogo();

var path = document.querySelector('.path-5');
drawLogo();

var path = document.querySelector('.path-6');
drawLogo();

var path = document.querySelector('.path-7');
drawLogo();

var path = document.querySelector('.path-8');
drawLogo();

var path = document.querySelector('.path-9');
drawLogo();

$('.hamburger-menu').on('click', ()=> {
  document.getElementById('mySideNav').style.width = '100%';
});

$('.closebtn').on('click', ()=> {
  document.getElementById('mySideNav').style.width = '0';
});

$('.mobile-nav').on('click', ()=> {
  document.getElementById('mySideNav').style.width = '0';
});
