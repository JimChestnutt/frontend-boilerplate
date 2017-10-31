// main js file. using browserify and babel, so we can use ES6/7/8 syntax and require modules
/*global require:true*/
/*eslint no-undef: "error"*/

/*
* JS external modules/libraries
*/

// import modernizr build
require('./vendor/modernizr.js');

// slick carousel
require('slick-carousel');

// require and prepare jquery
const $ = require('jquery');


/*
* Menu handling
*/

// main menu toggle
$('.js-toggle-nav.header__toggle').click(function() {
	$(this).toggleClass('is-active');
	$('.header__nav').toggleClass('is-active-nav');
	$('body').toggleClass('mobile-menu--active');
});

// close menu on click outside or esc key
function closeHeaderMenu() {
	$('.js-toggle-nav.header__toggle').removeClass('is-active');
	$('.header__nav').removeClass('is-active-nav');
	$('body').removeClass('mobile-menu--active');
}

document.addEventListener('keyup', (event) => {
	const keyName = event.key;
	if (keyName === 'Escape') {
		if($('body').hasClass('mobile-menu--active')) {
			closeHeaderMenu();
		}
	}
});

function handleMenuClick(event) {
	if($('body').hasClass('mobile-menu--active')) {
		if( ((event.target).closest('.header__nav') == null) && ((event.target).closest('.header__toggle') == null) ) {
			closeHeaderMenu();
		}
	}
}

document.addEventListener('click', (event) => { handleMenuClick(event); });
document.addEventListener('touchend', (event) => { handleMenuClick(event); });
