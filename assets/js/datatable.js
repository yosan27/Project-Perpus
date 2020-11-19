$(document).ready(function() {
  var table = $('#history').DataTable( {
      responsive: true
  } );

  new $.fn.dataTable.FixedHeader( table );
} );


$(document).ready(function() {
  $('#collections').dataTable( {
      "pagingType": "full_numbers"
    } );
} );