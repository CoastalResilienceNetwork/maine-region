(function($){
	$(document).ready(function(){
		navPosition();
		//navHide();
		//navHover();
		newNavHover();
		navOpen();
		navResize();
	});

	function navPosition(){
		//var test = $($('#menu-main-menu').children()[1]).find('ul');
		//console.log(test);
		//$($('#menu-main-menu').children()[1]).find('ul').css('margin-left','-246%');
		//$($('#menu-main-menu').children()[2]).find('ul').css('margin-left','-254.7%');
		
		var mainMenuOffset = $('.menu-main-menu-container').offset().left; 

		var parentItems = $('.menu-item-has-children');
		$.each(parentItems,function(i){
			$(parentItems[i]).find('ul').css({
				'display':'block',
				'opacity':'0',
			});

			$(parentItems[i]).find('ul').find('li').first().css('margin-left',mainMenuOffset+7);

		});


		//$($('#menu-main-menu').children()[1]).hover(function(){
		
			/*
			var one = $($('#menu-main-menu').children()[1]).find('ul').find('li');
			//console.log('count:'+one.length);
			var oneWidth = 0;
			$.each(one,function(i){
				console.log($(one[i]).innerWidth());
				oneWidth+=$(one[i]).innerWidth();
			});
			console.log('oneWidth:'+oneWidth);
			var winWidth = $(window).width();
			var newMargin = (winWidth-oneWidth)/2;
			$($('#menu-main-menu').children()[1]).find('ul').find('li').first().css('margin-left',newMargin-15);	
		//});

		//$($('#menu-main-menu').children()[2]).hover(function(){
			var two = $($('#menu-main-menu').children()[2]).find('ul').find('li');
			var twoWidth = 0;
			$.each(two,function(i){
				//console.log($(two[i]).innerWidth());
				twoWidth+=$(two[i]).innerWidth();
			});
			var winWidth = $(window).width();
			var newMargin = (winWidth-twoWidth)/2;
			$($('#menu-main-menu').children()[2]).find('ul').find('li').first().css('margin-left',newMargin-15);
*/
			var parentItems = $('.menu-item-has-children');
			$.each(parentItems,function(i){
				$(parentItems[i]).find('ul').css({
					'display':'none',
					'opacity':'1',
				});

			});
		//});
	}
	
	function newNavHover(){
		var navItems = $('.menu-item-has-children');
		$.each(navItems,function(i){
			$(navItems[i]).hover(function(){
				if( pageOpen != 99 ){
					$(navItems[pageOpen]).find('ul').css('display','none');
					console.log('foo');
				}
				if( $(navItems[i]).find('ul').length>0 ){
					$(navItems[i]).find('ul').css('display','block');
					//
					var mainMenuOffset = $('.menu-main-menu-container').offset().left; 
					$(navItems[i]).find('ul').find('li').first().css('margin-left',mainMenuOffset+7);
				}

			},function(){
				if( $(navItems[i]).find('ul').length>0 ){
					$(navItems[i]).find('ul').css('display','none');
				}
				if( pageOpen != 99 ){
					$(navItems[pageOpen]).find('ul').css('display','block');
					console.log('foo');
				}
			});
		});
	}

	function navHover(){
		var navItems = $('#menu-main-menu').find('li');
		$.each(navItems,function(i){
			
			$(navItems[i]).mouseenter(function(){
				if($(this).find('ul').length>0){
					$(navItems[i]).find('ul').fadeIn('fast');
				}
			});
			$(navItems[i]).mouseleave(function(){
				if($(this).find('ul').length>0){
					setTimeout(function(){
						if( $(navItems[i]).find('ul').hasClass('hover') ){
						}else{
							$(navItems[i]).find('ul').fadeOut('fast');
						}
					},500);
				}
			});
			$(navItems[i]).find('ul').mouseenter(function(){
				$(this).addClass('hover');
			});

			$(navItems[i]).find('ul').mouseleave(function(){
							$(navItems[i]).find('ul').removeClass('hover');
							$(navItems[i]).find('ul').fadeOut('fast');					
			});
		});
	}

	var pageOpen = 99;

	function navOpen(){
		var menuParent = $('.menu-item-has-children');
		
		$.each(menuParent,function(i){
			var kids = $(menuParent[i]).find('ul').find('li');
			var kidActive = false;
			$.each(kids,function(j){
				if( $(kids[j]).hasClass('current-menu-item') || $(kids[j]).hasClass('current-page-ancestor') ){
					kidActive = true;
				}
			});
			if( kidActive == true ){
				
				pageOpen = i;

				$(menuParent[i]).find('ul').css('display','block');
				/*
				var one = $(menuParent[i]).find('ul').find('li');
				var oneWidth = 0;
				
				$.each(one,function(k){
					oneWidth+=$(one[k]).innerWidth();
				});
				var winWidth = $(window).width();
				var newMargin = (winWidth-oneWidth)/2;
				console.log(newMargin);
				$(menuParent[i]).find('ul').find('li').first().css('margin-left',newMargin);	*/			
			}	

				
				

		})
	}

	function navResize(){
		$(window).resize(function(){
			var mainMenuOffset = $('.menu-main-menu-container').offset().left; 

			var parentItems = $('.menu-item-has-children');
			$.each(parentItems,function(i){
				/*$(parentItems[i]).find('ul').css({
					'display':'block',
					'opacity':'0',
				});*/

				$(parentItems[i]).find('ul').find('li').first().css('margin-left',mainMenuOffset+7);

			});
		});
	}

})(jQuery);