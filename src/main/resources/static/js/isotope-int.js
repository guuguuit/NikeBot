$(window).on('load',function(){
  'use strict';
  $(function(){
    var $portfolio = $('.gallery-wrp > div.row');
    $portfolio.isotope({
      masonry: {
        columnWidth:1
      }
    });

    var $portfolio2 = $('.masnory2');
    $portfolio2.isotope({
      masonry: {
        columnWidth:.3
      }
    });
    var $optionSets = $('.fltrs-lst'),
    $optionLinks = $optionSets.find('a');
    $optionLinks.click(function(){
      var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.fltrs-lst');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $portfolio.isotope(options);
          $portfolio2.isotope(options);
        }
        return false;
      });

  });
});
