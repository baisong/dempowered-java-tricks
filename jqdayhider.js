/**
 * Custom jQuery effects for gking theme.
 * 
 * Note: this (function ($) { ... }(jQuery); is a Drupal idiom, optional to use and FASTER :)
 */
(function ($) {
  Drupal.behaviors.rosa = {
    attach: function (context) {

// declare dates and years
      var daynames = new Array("Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, ")

// declare the variable for date-display-single

      var select = '.span.date-display-single';

// verifies there are date displays to edit

        if ($(select).length) {

// for each date display that we found...

           $(select).each(function( index) {

// Looks at the contents of this date display

              $(this).contents().filter(function(){

// return from this the variable day

              return (this.daynames);

// removes anything that matches the filter

              }).remove();
          });
        }
      }
    };
