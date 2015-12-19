
$("document").ready(function($) {
	var timer = 5;
	var string = "Redirecting in " + '<span class="animated flipInX">' + timer + '</span>' + "..."
	$("#redirect").append(string);

	function back(){
		timer--;
		$("#redirect").empty();
		var string = "Redirecting in " + '<span class="animated flipInX">' + timer + '</span>' + "..."
		$("#redirect").append(string);
		if (timer==0){
			clearInterval(refresh);
			window.location.href = 'isaacgluck.com';
		}
	}

	var refresh = setInterval(function(){
		back();
	}, 1000);
});


