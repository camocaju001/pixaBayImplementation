$(function() {
	$( ".input--search" ).keypress(function() {
		var searchWord = $( ".input--search" ).val();
	  	searchImages(searchWord);
	});
	$( ".button--search" ).click(function(event) {
		event.preventDefault();
		var searchWord = $( ".input--search" ).val();
	  	searchImages(searchWord);
	});
});

function searchImages(searchWord){
	var API_KEY = '3768083-03c9b9f4d602401c878f9a1ab';
	var url_pixabay = "https://pixabay.com/api/?key="+API_KEY+"&q="+searchWord+"&image_type=photo&min_width=300&min_height=300";
  	$.ajax({
	  url: url_pixabay,
	}).done(function(data) {

	    var html_result ="";
		jQuery.each(data.hits, function() {
			
			//console.log(this);

			var height= this.imageHeight;
			var width= this.imageWidth;

			//second size validation
			if(width>300 && height>300){
				// validate width vs height
				if(width>height){
					// validate width  vs height + 250px
					console.log(height);console.log(width);
					if(width<=(height+1000)){
						console.log("pasa");
						  html_result = html_result+'<div class="result">'
						  							+'<a href="'+this.pageURL+'" target="_blank">'
						  								+'<img src="'+this.previewURL+'" class="image image--result">'
						  								+'<p class="image--size">'+width+' X '+height+'<p>'
						  							+'</a>'
						  								+'<div class="detail--result">'
							  								+this.likes+' <img src="img/like.png" class="icon"> '
							  								+this.comments+' <img src="img/comment.png" class="icon"> '
							  								+this.favorites+' <img src="img/fav.png" class="icon"> '
							  								+'</div>'
						  							+'</div>';
					}else{
						console.log("no pasa");
					}
				}
			}
		});

	  $('.noResults').html("Numero de resultados: "+data.total);
	  $('.results').html(html_result);
	});
}