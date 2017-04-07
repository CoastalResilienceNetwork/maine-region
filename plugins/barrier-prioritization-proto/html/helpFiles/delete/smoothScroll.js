(function($) {
  $(document).ready(function(){
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $('[id="'+this.hash.replace(/#/,'')+'"]');
        target = target.length ? target : $('[name="' + this.hash.slice(1) +'"]');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-225
          }, 1000);
          return false;
        }
      }
    });

    if ( window.location.hash.length > 0 )  {
      $( '[href="' + window.location + '"]' ).click();
    }
  });
})(jQuery);
