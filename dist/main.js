jQuery(document).ready(function(){
	if (document.querySelector('.slider_section')) {
		 $('.slider-main').slick({
			  slidesToShow: 1,
			  arrows: false,
			  dots: true,
				responsive: [
			    {
			      breakpoint: 9999,
			      settings: {
							dotsClass: 'slick-dots slider__dots',
							customPaging: function(slick,index) {
								 var targetImage = slick.$slides.eq(index).find('img').attr('src');
								 var targetTitle = slick.$slides.eq(index).find('h3').text();
								 return '<div class="dots-item"><img src="' + targetImage + '"/><span>' + targetTitle + '</span></div>';
						  },
			      }
			    },
			    {
			      breakpoint: 850,
			      settings: {
							customPaging : function(slider, i) {
			            var thumb = jQuery(slider.$slides[i]).data();
			            return '<button type="button">'+(i+1)+'</button>';
			        }
			      }
			    }
			  ]
			});
	}
	if (document.querySelector('.showmore')) {
		$('.showmore').on('click', function() {
			$(this).text("");
			$(this).addClass("lds-dual-ring");
		});
	}
	if (document.querySelector('.page_slider')) {
		$('.page_slider__big').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  asNavFor: '.page_slider__thumb'
		});
		$('.page_slider__thumb').slick({
		  slidesToShow: 8,
		  slidesToScroll: 1,
			infinite: false,
		  asNavFor: '.page_slider__big',
		  arrows: true,
		  centerMode: false,
		  focusOnSelect: true,
			responsive: [
		    {
		      breakpoint: 9999,
		      settings: {
		        slidesToShow: 8,
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 6
		      }
		    },
		    {
		      breakpoint: 850,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    }
		  ]
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
