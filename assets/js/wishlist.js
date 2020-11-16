$(document).ready(function () {
    $('#wishlist_table').dataTable({
        'columnDefs': [{
            'targets': [5], // column index (start from 0)
            'orderable': false, // set orderable false for selected columns
        }],
    });
});

var btnPinjam2 = document.getElementById("btn-pinjam2");
btnPinjam2.addEventListener("click", function () {
    document.getElementById("data2").style.display = "none";
    document.getElementById("cartCount").innerHTML = "3";

});