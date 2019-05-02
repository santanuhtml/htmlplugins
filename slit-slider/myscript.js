jQuery(document).ready(function(){

  jQuery('#slippry-home').slippry({
    transition: 'fade',//, // fade, horizontal, kenburns, false
    pager: false
  });

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
  });

});