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
	


function Human(name, age) {
	this.name = name;
	this.age = age;
	this.sex = 'M';
	this.height = 170;
	this.weight = 70;
}

function Worker(name, age) {
	Human.apply(this, arguments);
	this.job = 'factory';
	this.salary = 2000;
}
    
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function() {
	console.log(this.name + " is working.")
}

function Student(name, age) {
	Human.apply(this, arguments);
	this.place = 'Academy';
	this.stipend = 500;
}
    
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.watchTV = function() {
	console.log(this.name + " is watching TV shows.")
}

var worker = new Worker("Bob", 40);
var student = new Student("Billy", 21);
worker.work();
student.watchTV();
console.log(student);
console.log(worker);
});

