/**
 * Custom jQuery effects for gking theme.
 *
 * Note: this (function ($) { ... }(jQuery); is a Drupal idiom, optional to use and FASTER :)
 */
(function ($) {
  Drupal.behaviors.rosa = {
    attach: function (context) {
   

        //hides all dates on Works page in ". YYYY." format
 
        if ($('.node-teaser').length == 0){
             ($('.node-teaser').replace(/. 2005.|. 2006.|. 2007.|. 2008.|. 2009.|. 2010.|. 2011.|. 2012.|/gi, ""));
        }
 
 
      //alert('Cogito ergo burrito');
      //$('body').hide();
 
      
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
      
     }
   };
 })(jQuery);
