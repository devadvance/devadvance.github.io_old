function showItems(){
	var i = 200;
	$('.items').children().each(function(index, itemDiv) {
		$(itemDiv).delay(i).queue(function() {
			$(itemDiv).addClass('animate');
			$(itemDiv).dequeue();
		})
		i = i + 200;
	});
}

$(document).ready(function() {
	showItems();
});