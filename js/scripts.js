$(function(){
	var $threeSixty = $('.threesixty');

	$threeSixty.threeSixty({
		// horizontal OR vertical
		dragDirection: 'horizontal',

		// use arrow keys
		useKeys: true,

		// is draggable?
		draggable: true
	});

	// Photo amount
	var countPhotos = $('.threesixty').data('count');

    $('#range').ionRangeSlider({
        type     : 'single',
        min      : 0,
        max      : (countPhotos - 1),
        from     : 0,
        step     : 1,
        onChange : function (data) {
			$('.threesixty-frame').hide(0);
			$('.threesixty-frame[data-index = "' + data.input.val() + '"').show(0);
	    },
    })

    // Saving it's instance to var
	var slider = $("#range").data("ionRangeSlider");

	$threeSixty.on('move',function(event){
		let active = $('.threesixty-frame:visible').data('index')
		// when user is dragging
		slider.update({
		    from: active,
		});
	});

	$threeSixty.on('down',function(){
		// when user starts to drag
		$('.threesixty').removeClass('autoplay')
		$('.autoplay_btn').removeClass('active')
	});

	var autoplay = setInterval(function() {
		if ($('.threesixty').hasClass('autoplay')) {
			$('.threesixty.autoplay').prevFrame()

			let active = $('.threesixty-frame:visible').data('index')

			slider.update({
			    from: active,
			});
		}
	}, 60);

	$("body").on('click', '.autoplay_btn',function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$('.threesixty').removeClass('autoplay')
		} else{
			$(this).addClass('active')

			$('.threesixty').addClass('autoplay')
		}
	});

	// Stop rotating
	$(document).click(function (e){
        var block = $(".autoplay_btn");
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            block.removeClass('active');
			$('.threesixty').removeClass('autoplay')
        }
    });

	$(document).touch(function (e){
        var block = $(".autoplay_btn");
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            block.removeClass('active');
			$('.threesixty').removeClass('autoplay')
        }
    });

})