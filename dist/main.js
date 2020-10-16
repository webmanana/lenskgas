jQuery(document).ready(function(){
	if (document.querySelector('.slider_section')) {
		 $('.slider-main').slick({
			  slidesToShow: 1,
			  arrows: false,
			  dots: true,
			  dotsClass: 'slick-dots slider__dots',
				customPaging: function(slick,index) {
					 var targetImage = slick.$slides.eq(index).find('img').attr('src');
					 var targetTitle = slick.$slides.eq(index).find('h3').text();
					 return '<div class="dots-item"><img src="' + targetImage + '"/><span>' + targetTitle + '</span></div>';
			 }
			});
	}
});

$('img[src$=".svg"]').each(function() {
	var $img = jQuery(this);
	var imgURL = $img.attr('src');
	var attributes = $img.prop("attributes");

	$.get(imgURL, function(data) {
		var $svg = jQuery(data).find('svg');

		$svg = $svg.removeAttr('xmlns:a');

		$.each(attributes, function() {
			$svg.attr(this.name, this.value);
		});

		$img.replaceWith($svg);
	}, 'xml');
});
