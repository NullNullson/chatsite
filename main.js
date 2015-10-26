var maxMessageLength = 100;
var roty = 0;
var rotz = 0;

var update = function(){
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			$('.messages').html('');
			var xmlDoc = xhttp.responseXML;
			var responses = xmlDoc.getElementsByTagName('message');
			for(var i = 0; i < responses.length; i++){
				var txt = responses[i].childNodes[0];
				if(txt){
					$('<div>').addClass('message').addClass('panel').addClass('panel-default').text(txt.nodeValue).prependTo('.messages');
				}
			}
		}
	};
	xhttp.open('GET', 'test.php', true);
	xhttp.send();
	setTimeout('update()', 1000);
};

var main = function(){
	$('.postbtn').addClass('disabled');
	$('.postbtn').click(function(){
		var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){
				$('.messages').html('');
				var xmlDoc = xhttp.responseXML;
				var responses = xmlDoc.getElementsByTagName('message');
				for(var i = 0; i < responses.length; i++){
					var txt = responses[i].childNodes[0];
					if(txt){
						$('<div>').addClass('message').addClass('panel').addClass('panel-default').text(txt.nodeValue).prependTo('.messages');
					}
				}
			}
		};
		xhttp.open('GET', 'test.php?q=' + $('.msgbox').val(), true);
		xhttp.send();
	});
	$('.msgbox').keyup(function(){
		if($('.msgbox').val().length <= 0){
			$('.postbtn').addClass('disabled');
		}
		else{
			$('.postbtn').removeClass('disabled');
		}
	});
	$('.login').click(function(){
		$('.loginform').slideDown();
	});
	var interval = 10;
	$(document).keypress(function(event){
		if(event.which == 97){ //left
			rotz -= interval;
		}
		else if(event.which == 119){ //up
			roty += interval;
		}
		else if(event.which == 100){ //right
			rotz += interval;
		}
		else if(event.which == 115){ //down
			roty -= interval;
		}
		$('.chatarea').css('transform', 'rotateY(' + rotz + 'deg) rotateX(' + roty + 'deg)');
	});
};

$(document).ready(function(){
	main();
	update();
});