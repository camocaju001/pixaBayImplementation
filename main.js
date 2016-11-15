$(function() {
	$( ".input--search" ).keypress(function() {
		var searchWord = $( ".input--search" ).val();
	  	console.log( "Handler for .keypress() called. "+searchWord );
	  	searchImages(searchWord);
	});
});

function searchImages(searchWord){
	var url_pixabay = "https://pixabay.com/api/?key=3768083-03c9b9f4d602401c878f9a1ab&q="+searchWord+"&image_type=photo";
  	$.ajax({
	  url: url_pixabay,
	}).done(function(data) {
	   //console.log(data.hits);
	   var html_result ="";
		jQuery.each(data.hits, function() {
		  console.log(this);
		  html_result = html_result+'<img src="'+this.previewURL+'" class="image image--result">';
		});
	  //var html_result =;

	  $('.noResultados').html("Numero de resultados: "+data.total);
	  $('.results').html(html_result);
	});
}