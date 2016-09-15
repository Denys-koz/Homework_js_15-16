'use strict';
$(function() {

	var API_KEY = 'LIVDSRZULELA';

	function createRequest(){
		var inputValue = $('.searcInput').val();
			console.log(inputValue);
			var URL = "https://api.riffsy.com/v1/search?key="+API_KEY+"&tag=" + inputValue + "&limit=10";
			getRequest(URL);
	}

	function getRequest(URL){
	$.getJSON(URL, function(data){
		console.log(data);
    if (data.results.length > 0){
    	$('#holder').empty();
        for (var i = 0; i < data.results.length; i++) {
        	var imgSrc = data.results[i].url;
        	$('#holder').append('<img src ="' + imgSrc + '" class="searchImg">');
        }
    } else
        console.log('No results');
	})
	};

	$('.searchBtn').on('click', function( event ) {
		createRequest();
	});

	$('.searcInput').keydown(function( event ) {
  		if ( event.which == 13 ) {
   			createRequest();
  		}
	});
	


    

});

