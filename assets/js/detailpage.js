fetch('https://www.googleapis.com/books/v1/volumes/U_-BBAAAQBAJ')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        document.getElementById('bookTitle').innerHTML = data.volumeInfo.title
        document.getElementById('publishedAt').innerHTML = data.volumeInfo.publishedDate
        document.getElementById('bookCategories').innerHTML = data.volumeInfo.categories[0]
        // document.getElementById('bookCover').innerHTML = data.volumeInfo.imageLinks.thumbnail
        document.getElementById('bookDescription').innerHTML = data.volumeInfo.description

        var bannerUrl = 
        // data.volumeInfo.imageLinks.thumbnail
        'https://res.cloudinary.com/todidewantoro/image/upload/v1604943658/bootcamp/covernya_ejy4v1.jpg'
        $(".bannerdetails").append("<div class='jumbotron jumbotron-fluid detail' style='background-image: url(" + bannerUrl + ")'>")
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  document.getElementById("arrowbackbutton").onclick = function () {
    location.href = "/index.html";
  };