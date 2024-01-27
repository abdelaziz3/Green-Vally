/* gallery */
$( function() {
  var $grid = $('.grid').isotope({
    itemSelector: 'article'
  });
  // filter buttons
  $('.container-fluid.gallery .filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});
$(window).bind("load", function() {
  $('#all').click();
});
/* end gallery */
