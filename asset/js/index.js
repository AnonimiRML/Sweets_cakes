AOS.init();

// document.addEventListener( 'DOMContentLoaded', function () {
// 	var splide = new Splide( '#splide-gallery' ).mount();
// 	// Collect elements of thumbnails.
// 	var images = document.querySelectorAll( '.js-thumbnails li' );

// 	var activeImage;
// 	var activeClass = 'is-active';

// 	// Listen a click event and toggle a class.
// 	for ( let i = 0, len = images.length; i < len; i++ ) {
// 		var image = images[ i ];

// 		splide.on( 'click', function () {
// 			if ( activeImage !== image ) {
// 				activeImage.classList.remove( activeClass );
// 				image.classList.add( activeClass );
// 				splide.go( i );
// 				activeImage = image;
// 			}
// 		}, image );
// 	}
// } );