// var newAlert = require('./alert');
//
// newAlert();
'use strict';
require ('./css/main');
import $ from 'jquery';


/* Set the width of the side navigation to 250px */
$('.hamburger-menu').on('click', ()=> {
  document.getElementById('mySideNav').style.width = '100%';
});
//
// /* Set the width of the side navigation to 0 */
$('.closebtn').on('click', ()=> {
  document.getElementById('mySideNav').style.width = '0';
});
