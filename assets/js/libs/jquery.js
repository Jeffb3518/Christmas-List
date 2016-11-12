var searchTerm;
var searched; 

// On enter button press
$(document).keypress(function(e) {
	if(e.which == 13) {
		// Trims the search term
		searchTerm = $('.search').val().trim()
		// Sends term to local storage
		localStorage.setItem("searchTerm", searchTerm)
		// Redirects
		if (window.location.href = "index.html") {
			window.location.assign("search.html");
		}
// Refreshes
if (window.location.href = "search.html") {
	location.reload()

}


}
});
// Pulls from storage
var searched = localStorage.getItem("searchTerm")
// Fills in the search bar
$("#top").attr("value",searched)
// Assigns ajax variables, pulls from local storage
var gift = searched
var apiKey = '93x6nkekfs4k9xvfnh6wpan4'
var queryURL = 'http://api.walmartlabs.com/v1/search?apiKey=' + apiKey +'&query=' + gift

$.ajax({url: queryURL, method: 'GET', dataType:"jsonp"})
.done(function(response){
	var results = response

// Loops through the 10 search results and pulls the images
	for(var i=0; i < results.items.length; i++) {

		$('#pics').append('<img src="'+ results.items[i].thumbnailImage + '" alt="" />')

	}
});















