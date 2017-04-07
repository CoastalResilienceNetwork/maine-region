(function( $ ) {
	$( document ).ready( function() {
		/* this only runs in the front when we have a slider in the DOM */
		if ( $( '#slider' ).length > 0 ) {
			/* cache DOM elements */
			var $slider = $( '#slider' );
			var $slideContainer = $( '.slides', $slider );
			var $slides = $( '.slide', $slider );
			var $slideImages = $( 'div.slide-image', $slides );
			var $slideDots = $( '#slider-dots', $slider );

			/* calculate transition times depending on the animation speed */
			$( '#slider-dots span.slider-dot' )
				.css( '-webkit-transition', 'all ' + ( animationSpeed / 2 ) + 'ms ease' )
				.css( '-moz-transition', 'all ' + ( animationSpeed / 2 ) + 'ms ease' )
				.css( '-o-transition', 'all ' + ( animationSpeed / 2 ) + 'ms ease' )
				.css( 'transition', 'all ' + ( animationSpeed / 2 ) + 'ms ease' );

			/* navigation */
			$( document ).on( 'click', '.nav-icon .dashicons', function() {
				/* pause the animation first */
				clearInterval( interval );

				$( '.slider-dot', $slideDots ).removeClass( 'active-slide' );

				if ( $( this ).closest( '.slider-nav-arrow' ).hasClass( 'nav-right' ) ) {
					currentSlide++;
					$slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function() {
						if ( currentSlide === $slides.length ) {
							currentSlide = 2;
							$slideContainer.css( 'margin-left', currentSlide * width * -1 + width );
						}
						$( '#slide-' + ( currentSlide - 1 ) ).addClass( 'active-slide' );
					});
				}
				else if ( $( this ).closest( '.slider-nav-arrow' ).hasClass( 'nav-left' ) ) {
					currentSlide--;
					$slideContainer.animate({ 'margin-left': '+=' + width }, animationSpeed, function() {
						if ( currentSlide === 1 ) {
							currentSlide = $slides.length - 1;
							$slideContainer.css( 'margin-left', ( $slides.length - 2 ) * width * -1 );
						}
						$( '#slide-' + ( currentSlide - 1 ) ).addClass( 'active-slide' );
					});
				}
			});

			/* slider dots navigation */
			$( document ).on( 'click', '.slider-dot', function() {
				if ( $( this ).hasClass( 'active-slide' ) )
					return;

				var slide = parseInt( $( this ).prop( 'id' ).replace( /\D/g, '' ) );

				$( '.slider-dot', $slideDots ).removeClass( 'active-slide' );

					$slideContainer.animate({ 'margin-left': '-' + ( width * ( slide ) ) + 'px' }, animationSpeed, function() {
						currentSlide = slide + 1;
						$( '#slide-' + ( slide ) ).addClass( 'active-slide' );
					});
			});

			/* set widths */
			$slider.css( 'width', width ).css( 'height', height );
			$slideContainer.css( 'width', width * $slides.length ).css( 'height', height );
			$slides.css( 'width', width ).css( 'height', height );
			$slideImages.css( 'width', width ).css( 'height', height );

			function startSlider() {
				clearInterval( interval );
if ( typeof andrux !== 'undefined' ) {return;}
				interval = setInterval( function() {
					currentSlide++;

					$( '.slider-dot', $slideDots ).removeClass( 'active-slide' );

					$slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function() {
						if ( currentSlide === $slides.length ) {
							currentSlide = 2;
							$slideContainer.css( 'margin-left', currentSlide * width * -1 + width );
						}
						$( '#slide-' + ( currentSlide - 1 ) ).addClass( 'active-slide' );
					});
				}, pause );
			}

			function pauseSlider() {
				clearInterval( interval );
			}

			$slideContainer.css( 'margin-left', currentSlide * width * -1 + width );
			$slider.on( 'mouseenter', pauseSlider ).on( 'mouseleave', startSlider );
			$( '.slider-dot:first', $slideDots ).addClass( 'active-slide' );
			startSlider();

			/* calculate position of slider dots using the height of the slides */
			$slideDots.css( 'margin-top', ( $slider.height() - 40 ) + 'px' );
		}

		/* image upload button */
		$( document ).on( 'click', '.upload-button', function() {
			var $uploaderContainer = $( this ).parent();
			var $uploadInput = $uploaderContainer.find( '.upload-input' );
			var $uploadThumb = $uploaderContainer.find( '.upload-thumb' );
			var $uploadButton = $uploaderContainer.find( '.upload-button' );

			if ( $uploadButton.hasClass( 'remove-state' ) ) {
				$uploadButton.removeClass( 'remove-state' ).addClass( 'add-state' ).val( 'Choose image' );
				$uploadInput.val( '' );
				$uploadThumb.html( '' );
			}
			else {
				mediaFrame = wp.media.frames.mediaFrame = wp.media({
					multiple: false,
					library: {
						type: 'image'
					}
				});

				mediaFrame.on( 'select', function() {
					var selection = mediaFrame.state().get( 'selection' );
					selection.map( function( response ) {
						img = response.toJSON();
						$uploadInput.val( img.id );

						$.post( ajaxurl, {action: 'get_thumbnail', 'post-id': img.id, 'size': 'large' }, function( thumbHtml ) {
							$uploadButton.removeClass( 'add-state' ).addClass( 'remove-state' ).val( 'Remove' );
							$uploadThumb.html( thumbHtml );
						});
					});
				});

				mediaFrame.open();
			}
		});

		/* add slide */
		$( document ).on( 'click', '.add-slide', function() {
			var slideItem = '<div class="slide-item">' + $( '.slide-item:first' ).html() + '</div>';

			var $newSlide = $( slideItem ).appendTo( '#slides-data' );
			$newSlide.find( '[type=text], [type=hidden], textarea' ).val( '' );
			$newSlide.find( '.upload-button' ).removeClass( 'remove-state' ).addClass( 'add-state' ).val( 'Choose image' );
			$newSlide.find( '.upload-input' ).val( '' );
			$newSlide.find( '.upload-thumb' ).html( '' );
		});

		/* remove slides from the list */
		$( document ).on( 'click', '.remove-slide', function() {
			if ( $( '.slide-item' ).length > 1 ) {
				$( this ).closest( '.slide-item' ).remove();
			}
		});

		/* disable slider width when full width option is set */
		function fullWidthToggle() {
			if ( $( '#settings-full-width' ).is( ':checked' ) ) {
				$( '#settings-slides-width' ).prop( 'readonly', 'readonly' );
			}
			else {
				$( '#settings-slides-width' ).prop( 'readonly', '' );
			}
		}
		$( document ).on( 'change', '#settings-full-width', fullWidthToggle );
		fullWidthToggle();

		/* disable slider height when auto height option is set */
		function autoHeightToggle() {
			if ( $( '#settings-auto-height' ).is( ':checked' ) ) {
				$( '#settings-slides-height' ).prop( 'readonly', 'readonly' );
			}
			else {
				$( '#settings-slides-height' ).prop( 'readonly', '' );
			}
		}
		$( document ).on( 'change', '#settings-auto-height', autoHeightToggle );
		autoHeightToggle();
	});
})(jQuery);
