$(document).ready(function() {
	$("#hidden").hover(function() {
		$(this).css("color", "black");
	}, 
	function() {
		$(this).foggy();
		//$(this).css("display", "none");
	});

	$("button").click(function() {
		alert("I'm alerting you");
	})
});