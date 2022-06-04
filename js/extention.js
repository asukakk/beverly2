$(function(){
	$('.slider').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [//レスポンシブ指定（指定したbreakpointによってオプションを上書き可能）
			{
				breakpoint: 768,//breakpoint
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,//breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});