/**
 * Custom jQuery effects for gking theme.
 *
 * Note: this (function ($) { ... }(jQuery); is a Drupal idiom, optional to use and FASTER :)
 */
(function ($) {
  Drupal.behaviors.rosa = {
    attach: function (context) {

      /**
       * Thing 1: Removes years from Publication teasers.
       */

      // declare the variable for the biblio teasers
      var sel = '.node-biblio.node-teaser';
      // verifies biblio teasers to edit
      if ($(sel).length) {
      // for each biblio teaser that we found...
        $(sel).each(function( index) {
          // Looks at the contents of this individual biblio teaser...
          $(this).contents().filter(function(){
            // Text nodes are "type 3".
            return (this.nodeType == 3);
            // Removes all the nodes that matched our filter.
          }).remove();
        });  
      }

      /**
       * Thing 2: Reformats news date fields like "MM/DD/YYYY".
       */
      
      sel = "";
      if ($(sel).length) {
        // Does something...
      }
      
      /**
       * Thing 3: Italicizes all play titles wherever they appear.
       */
      
      sel = "";
      if ($(sel).length) {
        // Does something...
      }

     }
   };
 })(jQuery);