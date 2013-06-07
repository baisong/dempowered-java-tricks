/**
 * Custom jQuery effects for gking theme.
 *
 * Note: this (function ($) { ... }(jQuery); is a Drupal idiom, optional to use and FASTER :)
 */
(function ($) {
  Drupal.behaviors.rosa = {
    attach: function (context) {

           $('biblio-entry node node-biblio node-teaser contextual-links-region article clearfix').replace('. 2005.','');
           $('.biblio-entry node node-biblio node-teaser contextual-links-region article clearfix').replace("'. 2005.','');
           $('#biblio-entry node node-biblio node-teaser contextual-links-region article clearfix').replace('. 2005.','');
}



        //hides all dates on Works page in ". YYYY." format

  };
})(jQuery);
