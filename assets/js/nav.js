$(document).ready(function(){
	$('#nav a')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 100%)"}, 
				{duration:500})
			})
		.mouseout(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 0%)"}, 
				{duration:500})
			})
});