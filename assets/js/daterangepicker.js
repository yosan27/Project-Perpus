$(function() {
  $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+7D", defaultDate: "+ 1w" });

  if(($( "#bataspengembalian" ).length !== 1 )) {
    $( "#bataspengembalian" ).removeAttr( "#bataspengembalian" );
  }
  else {
      $('#datepicker').datepicker()
    .on("input change", function (e) {
    console.log("Date changed: ", e.target.value);
    const dateVal = e.target.value
    var date = new Date (dateVal); 
    date. setDate(date. getDate() + 7); 
    console. log(date);
    function convertDate(inputFormat) {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      var d = new Date(inputFormat)
      return [pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/')
    }
    $( "#bataspengembalian" ).append(convertDate(date));
    });
  }
});
