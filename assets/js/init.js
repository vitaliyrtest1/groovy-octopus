/*
	Altitude by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Object-fit (pseudo) polyfill.
		if (!browser.canUse('object-fit'))
			$('img[data-position]').each(function() {

				var	$this = $(this),
					$parent = $this.parent();

				// Apply img's src to parent.
					$parent
						.css('background-image', 'url("' + $this.attr('src') + '")')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat')
						.css('background-position', $this.data('position'));

				// Hide img.
					$this
						.css('opacity', '0');

			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				target: $body,
				visibleClass: 'is-menu-visible',
				side: 'right'
			});

})(jQuery);