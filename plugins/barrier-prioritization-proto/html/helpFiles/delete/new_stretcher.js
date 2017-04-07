(function($){
	$(document).ready(function(){
		//home page
		if($('#home-splash').length>0){
			var src = $('#home-splash').find('img').attr('src');
			if ( typeof src != 'undefined' ) {
				$('#home-splash').backstretch(src);
				$('#home-splash').find('.splash-image').css('display','none');
			}

			var otherSrc = $('#home-featured-story-image-wrap').find('img').attr('src');
			if ( typeof otherSrc != 'undefined' ) {
				$('#home-featured-story-image-wrap').backstretch(otherSrc);
				$('#home-featured-story-image-wrap').find('img').first().css('display','none');
			}
		}

		//our work and our focus pages
		if( $('.our-work-splash').length>0 ){
			var src = $('.our-work-splash').find('img').attr('src');
			if ( typeof src != 'undefined' ) {
				$('.our-work-splash').backstretch(src);
				$('.our-work-splash').find('.splash-image').css('display','none');
			}
		}

		//resources page
		if( $('.resource-splash-wrap').length>0 ){
			//splash
			var src = $('.resource-splash-wrap').find('img').attr('src');
			if ( typeof src != 'undefined' ) {
				$('.resource-splash-wrap').find('img').css('display','none');
				$('.resource-splash-wrap').backstretch(src);
			}

			//stories
			var stories = $('.story-wrap');
			if ( stories.length > 0 ) {
				$.each(stories,function(i){
					var thumbsrc = $(stories[i]).find('.story-tumb').find('img').attr('src');
					if ( typeof thumbsrc != 'undefined' ) {
						$(stories[i]).find('.story-tumb').find('img').css('display','none');
						$(stories[i]).find('.story-tumb').backstretch(thumbsrc);
					}
				});
			}

			var tools = $('.tools-apps-item');
			$.each(tools,function(i){
				var thumbsrc = $(tools[i]).find('.tools-apps-thumb-wrap').find('img').attr('src');
				if ( typeof thumbsrc != 'undefined' ) {
					$(tools[i]).find('.tools-apps-thumb-wrap').find('img').css('display','none');
					$(tools[i]).find('.tools-apps-thumb-wrap').backstretch(thumbsrc);
				}
				//tools-apps-tumb-wrap
			});
		}

		//team page
		if( $('#team-splash').length>0 ){
			//splash
			var src = $('#team-splash').find('img').attr('src');
			if ( typeof src != 'undefined' ) {
				$('#team-splash').find('img').css('display','none');
				$('#team-splash').backstretch(src);
			}

			//team one items
			var one = $('.team-one-item');
			$.each(one,function(i){
				var onesrc = $(one[i]).find('.team-one-thumb').find('img').attr('src');
				if ( typeof onesrc != 'undefined' ) {
					$(one[i]).find('.team-one-thumb').backstretch(onesrc);
					$(one[i]).find('.team-one-thumb').find('img').css('display','none');
				}
			});

			//team two items
			var two = $('.team-two-item');
			$.each(two,function(j){
				var twosrc = $(two[j]).find('.team-two-thumb').find('img').attr('src');
				if ( typeof twosrc != 'undefined' ) {
					$(two[j]).find('.team-two-thumb').find('img').css('display','none');
					$(two[j]).find('.team-two-thumb').backstretch(twosrc);
				}
			});

			//team three items
			var three = $('.team-three-item');
			$.each(three,function(k){
				var threesrc = $(three[k]).find('.team-three-thumb').find('img').attr('src');
				if ( typeof threesrc != 'undefined' ) {
					$(three[k]).find('.team-three-thumb').find('img').css('display','none');
					$(three[k]).find('.team-three-thumb').backstretch(threesrc);
				}
			});
		}

		//project area parent page
		if( $('#project-areas-wrap').length>0 ){
			//single item
			var item = $('.project-area-single-item');
			$.each(item,function(i){
				var src = $(item[i]).find('.project-area-thumb').find('img').attr('src');
				if ( typeof src != 'undefined' ) {
					$(item[i]).find('.project-area-thumb').find('img').css('display','none');
					$(item[i]).find('.project-area-thumb').backstretch(src);
				}
			});
		}

		//project area
		if( $('.single-project-splash-wrap').length>0 ){
			//splash
			var src = $('.single-project-splash-wrap').find('img').attr('src');
			setTimeout(function(){
				$('.single-project-splash-wrap').backstretch(src);
			},300);
				
			$('.single-project-splash-wrap').find('.inner').find('img').css('display','none');

			//related stories
			var related = $('.related-story-wrap');
			$.each(related,function(i){
				var src = $(related[i]).find('a').find('img').attr('src');
				if ( typeof src != 'undefined' ) {
					$(related[i]).find('a').find('img').css('display','none');
					$(related[i]).find('a').backstretch(src);
				}
			});
		}

		//contact page
		if( $('#contact-us-splash').length>0 ){
			//splash
			var src = $('#contact-us-splash').find('img').attr('src');
			if ( typeof src != 'undefined' ) {
				$('#contact-us-splash').backstretch(src);
				$('#contact-us-splash').find('#contact-us-splash-inner').find('img').css('display','none');
			}

			//contact items
			var items = $('.single-contact-item');
			$.each(items,function(i){
				var src = $(items[i]).find('.contact-item-image-wrap').find('img').attr('src');
				if ( typeof src != 'undefined' ) {
					$(items[i]).find('.contact-item-image-wrap').find('img').css('display','none');
					$(items[i]).find('.contact-item-image-wrap').backstretch(src);
				}
			});
		}

		//story
		if( $('#story-splash').length>0 ){
			var src = $('#story-splash-image').find('img').attr('src');
			if ( typeof src != 'undefined' ) {
				$('#story-splash').backstretch(src);
				$('#story-splash-image').find('img').css('display','none');
			}
		}

		//all stories
		if( $('.stories-page-title').length>0 ){
			var stories = $('.story-wrap');
			$.each(stories,function(i){
				var thumbsrc = $(stories[i]).find('.story-tumb').find('img').attr('src');
				if ( typeof thumbsrc != 'undefined' ) {
					$(stories[i]).find('.story-tumb').find('img').css('display','none');
					$(stories[i]).find('.story-tumb').backstretch(thumbsrc);
				}
			});
		}

	});
})(jQuery);
