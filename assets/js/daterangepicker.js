// $(function() {
//   $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+7D", defaultDate: "+ 1w" });

//   if(($( "#bataspengembalian" ).length !== 1 )) {
//     $( "#bataspengembalian" ).removeAttr( "#bataspengembalian" );
//   }
//   else {
//       $('#datepicker').datepicker()
//     .on("input change", function (e) {
//     console.log("Date changed: ", e.target.value);
//     const dateVal = e.target.value
//     var date = new Date (dateVal); 
//     date. setDate(date. getDate() + 7); 
//     console. log(date);
//     function convertDate(inputFormat) {
//       function pad(s) { return (s < 10) ? '0' + s : s; }
//       var d = new Date(inputFormat)
//       return [pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/')
//     }
//     $( "#bataspengembalian" ).append(convertDate(date));
//     });
//   }
// });



var changeDate = 0;

  $(function() {
    $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+7D", defaultDate: "+ 1w" });

        $('#datepicker').datepicker()
      .on("input change", function (e) {
        if (e.target.value !== "") {
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
      changeDate++;
      console.log(changeDate)
    }
      });
      
  });

  $(function() {
    $('#datepicker').datepicker()
    .on("input change", function (e) {
    if (changeDate > 1) {
      $("#bataspengembalian").remove();
      changeDate = 0;
    }
  });
  });

  $('[data-dismiss=modal]').on('click', function (e) {
    var $t = $(this),
        target = $t[0].href || $t.data("target") || $t.parents('.modal') || [];

  $(target)
    .find("input")
       .val('')
       .end();
       changeDate = 0;
})
  
    
