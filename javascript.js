
var row = 50;
var col = 50;

$(document).ready(function(){		

	//add the boxes initallialy
	newBoxes();
	drawSquare('default');

	/* Get the Butons */
	var $clearButton = $("#clear");
	var $trailButton = $("#trail");
	var $randomButton = $("#random");	

	/* Clear Button */
	$clearButton.click(function (){
		$("#content").empty();
		newBoxes();
		drawSquare('default');
	});


	/* Trail Button */
	$trailButton.click(function (){		
		drawSquare('trail');
	});


	/* random Button */
	$randomButton.click(function (){	
		drawSquare('random');
	});


});


/* This addes the inital boxes and sets them to the color of black */
var newBoxes = function(){
	console.log("newBoxes!");
	var row = prompt("How many rows?");
	var col = prompt("How many columns?");
	 console.log(row);
	 console.log(col);


	var boxHeight = $("#content").width()/row;

	var boxWidth = $("#content").height()/col;

	//remove the elements inside content
	$("#content").empty();

	for(var i = 0; i < row; i++){
		for(var x = 0; x < col; x++){						
			$newDiv = $('<div class="box"></div>');
			$('#content').append($newDiv);	
		}		
			
	}

	
	$('.box').height(boxHeight);
	$('.box').width(boxWidth);
	$('.box').css('background-color', 'black');
}


/* pass the class Name to draw Square */ 
/* It will apply the class based on what the user or the button passes in */
var drawSquare = function(className){

	if(className === 'default'){
		$(".box").mouseover(function (){
			$(this).css("background-color", "white");
			console.log("I'm drawing the default!");
		});		
	}

	else if(className === 'random'){
		$(".box").mouseover(function (){
			$(this).css("background-color", getRandomColor());
			console.log("Im drawng somethign random!");
		});
	}

	else if(className === 'trail'){
		$(".box").hover(function(){
			$(this).css("opacity", 0);			
		}, function(){
			$(this).css("background-color", "black");
			$(this).fadeTo("slow", 1);
		});
	}
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


