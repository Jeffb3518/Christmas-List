var searchTerm;
var searched;
$(document).keypress(function(e) {
    if(e.which == 13) {
     searchTerm = $('#search').val().trim()
      window.location.assign("search.html");
console.log(searchTerm)
      localStorage.setItem("searchTerm", searchTerm)

      $("#top").html(searchTerm)
    }


});



var searched = 



		// var movie = $(this).attr('data-name');
		// var queryURL = "http://www.flickr.photo.search.com/api_key=" + movie + "&y=&plot=short&r=json";
		// console.log(queryURL);
		// // Creates AJAX call for the specific movie being 
		// $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

		// 	});