var searchTerm;
var searched; 
console.log(window.location.href)
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
      // Here's where the bug is
       else if (window.location.href = "search.html") {
	   alert('ow');


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
var queryURL = 'http://api.walmartlabs.com/v1/search?apiKey=' + apiKey + '&numItems=5&query=' + gift



$.ajax({url: queryURL, method: 'GET', dataType:"jsonp"})
.done(function(response){
	var results = response

// Loops through the 10 search results and pulls the images 
for(var i=0; i < results.items.length; i++) {



	$('#pics').append('<div class=" results col-md-3 text-center"> <a class="example-image-link" href="'+ results.items[i].largeImage + '" data-lightbox="example-set" data-title="'+ results.items[i].name + '"><img class="search-img" src="' + results.items[i].mediumImage + ' + " alt="" height="150px"/></a> <br>  '+ results.items[i].name +' <br> <button class="btn my-cart-btn" data-id="" data-name="" data-summary="" data-quantity="1" data-image="assets/images/img_2.png">Add to Cart</button></div>')



}
});

// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// $('#search-img').on("click", function() {
//     $('#myModal').display()
// });

// // When the user clicks on <span> (x), close the modal
// $('span').on("click", function() {
//     $('#myModal').hide()
// });

// // When the user clicks anywhere outside of the modal, close it




// $(function () {

// 	var goToCartIcon = function($addTocartBtn){
// 		var $cartIcon = $(".my-cart-icon");
// 		var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
// 		$addTocartBtn.prepend($image);
// 		var position = $cartIcon.position();
// 		$image.animate({
// 			top: position.top,
// 			left: position.left
// 		}, 500 , "linear", function() {
// 			$image.remove();
// 		});
// 	}

// 	$('.my-cart-btn').myCart({
// 		classCartIcon: 'my-cart-icon',
// 		classCartBadge: 'my-cart-badge',
// 		classProductQuantity: 'my-product-quantity',
// 		classProductRemove: 'my-product-remove',
// 		classCheckoutCart: 'my-cart-checkout',
// 		affixCartIcon: true,
// 		showCheckoutModal: true,
// 		clickOnAddToCart: function($addTocart){
// 			goToCartIcon($addTocart);
// 		},


// 	});

// });










