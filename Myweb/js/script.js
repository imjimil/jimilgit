$(function() {
	$("#navbar-toggle").blur(function(event) {
		var sw = window.innerWidth;
		if (sw < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});