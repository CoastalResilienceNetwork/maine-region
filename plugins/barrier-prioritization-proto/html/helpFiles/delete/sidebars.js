/*
	Give the sidebar the class '.sidebar'
	supply sidebar() with the ID of the item that, when scrolled off screen
	fires the function.
*/
(function($){
	$(document).ready(function(){
		//var limit = $('#footer').offset().top - $('sidebar').innerHeight();
		if( $('.sidebar').not('.static').length>0 ){
			$('.sidebar').scrollToFixed({
				'marginTop':230,
				'limit':function(){
					var limit = $('#footer').offset().top - $('.sidebar').innerHeight()-240;
					return limit;
				},

			});
		}

		if( $('.sidebar').length>0 ){
			$(window).scroll(function(){
				sidebarFloatFix();
			});
		}

		if( $('#single-column-wrap').length>0 ){//single column template
			$(window).scroll(function(){
				highlight('.sidebar','#main-content-inner','.content-section');
			});
		}

		if( $('#resource-main').length>0 ){//resource template
			$(window).scroll(function(){
				highlight('.sidebar','#resource-column','.resource-section');
			});
		}

		if( $('#team-full-wrap').length>0 ){//team and partners page
			$(window).scroll(function(){
				highlight('.sidebar','#team-main-column','.team-section');
			});
		}

		if( $('#project-areas-inner').length>0 ){//project areas parent page
			$(window).scroll(function(){
				highlight('.sidebar','#project-areas-main','.project-section');
			});
		}

		if( $('#project-areas-parent-wrap').length>0 ){
			$(window).scroll(function(){
				highlight('.sidebar-children-wrap','.single-project-main','.single-project-section-wrap');
			});
		}




	});

	function highlight(sidebar,itemone,itemtwo){
		//current=0;
		var links = $(sidebar).find('a');

		//$(window).scroll(function(){
			var sidebarTop = $('.sidebar').offset().top;				

			var section = $(itemone).find(itemtwo);
			
			$.each(section,function(i){
				var sectionTop = $(section[i]).offset().top;
				var sectionHeight = $(section[i]).innerHeight();
				var sectionBottom = sectionTop + sectionHeight;

				if( sectionTop <= sidebarTop && sectionBottom >= sidebarTop){
					$.each(links,function(j){
						if( j != i ){
							$(links[j]).removeClass('sidebar-current-active');
						}else if( j == i ){
							$(links[j]).addClass('sidebar-current-active');
						}
					});
				}
			});
		//});
	}
	function sidebarFloatFix(){

		$('.sidebar').next().css('float','left');
		console.log('left');
	}

})(jQuery);
