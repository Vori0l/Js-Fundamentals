///------1------///
$(document).ready(function () {
	$('h2.head').css("color", "green");
	$('h2.head').find('.inner').addClass('big_font');
});
///------2------///
$(document).ready(function () {
	$('a[href^="https://"]').attr('target', '_blank');
});
///------3------///
$(document).ready(function () {
	$('div.thurd_task div:first').insertBefore('.thurd_task h3:first');
	$('div.thurd_task div:last').insertBefore('.thurd_task h3:last')
});
///------4------///
$(document).ready(function () {
	$('input[type="checkbox"]').change(function () {
		var checkedCount = $('input[type="checkbox"]:checked').length;
		if (checkedCount >= 3) {
			$('input[type="checkbox"]').attr('disabled', true);
		}
	});
});