document.addEventListener('DOMContentLoaded', () => {


	const swiper = new Swiper(".stock-swiper", {
		loop: true,
		slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
	    // when window width is >= 320px
	    320: {
	      slidesPerView: 1.6,
	      spaceBetween: 20
	    },
	    // when window width is >= 480px
	    768: {
	      slidesPerView: 1.8,
	      spaceBetween: 20
	    },
	    // when window width is >= 640px
	    1023: {
	      slidesPerView: 2,
    		spaceBetween: 20,
	    }
	  }
	});

	const header = new Swiper(".preview-slider__carousel", {
		loop: true,
		slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
	    nextEl: '.preview-slider__arrow_right',
	    prevEl: '.preview-slider__arrow_left',
	  },
	  pagination: {
	    el: '.preview-slider__circles',
	    clickable: true,
	    bulletActiveClass: 'preview-slider__circle_active',
	    bulletClass: 'preview-slider__circle'
	  },
	  breakpoints: {
	    // when window width is >= 320px
	    320: {
	      slidesPerView: 1.4,
    		spaceBetween: 20,
	    },
	    // when window width is >= 480px
	    768: {
	      slidesPerView: 2,
    		spaceBetween: 20,
	    },
	  }
	});

	const review__items = new Swiper(".review__items-mobile", {
		loop: true,
		slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
	    // when window width is >= 320px
	    320: {
	      slidesPerView: 1.5,
	      spaceBetween: 20
	    },
	    // when window width is >= 480px
	    768: {
	      slidesPerView: 1.8,
	      spaceBetween: 20
	    },
	    // when window width is >= 640px
	    1023: {
	      slidesPerView: 2,
    		spaceBetween: 20,
	    }
	  }
	});
	const blog__items = new Swiper(".blog__items-mobile", {
		loop: true,
		slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
	    // when window width is >= 320px
	    320: {
	      slidesPerView: 1.5,
	      spaceBetween: 20
	    },
	    // when window width is >= 480px
	    768: {
	      slidesPerView: 1.8,
	      spaceBetween: 20
	    },
	    // when window width is >= 640px
	    1023: {
	      slidesPerView: 2,
    		spaceBetween: 20,
	    }
	  }
	});

	function calc() {
		let coefficient = document.querySelector('.calculator__radio-place input:checked').value;
		let coefficient2 = document.querySelector('.calculator__form-element-type input:checked').value;
		let hoover = document.querySelector('.calculator__radio_choice input:checked').value;
		let additional = document.querySelectorAll('.check_row_1 input:checked');
		let squere = document.querySelector('.square input').value;
		let wc = document.querySelector('.bath input').value;

		let squereTotal = +squere * 200;
		let wcTotal = +wc * 500;
		let additionalTotal = 0;

		for (var i = 0; i < additional.length; i++) {
			additionalTotal += +additional[i].value;
		}

		let total = (additionalTotal + wcTotal + squereTotal + +hoover) * coefficient * coefficient2;
		document.querySelector('.final-price span.price').textContent = Number.parseInt(total).toLocaleString('ru') + "₽"
	}

	calc();
	document.querySelector('.square input').addEventListener('input', function(){
		this.value = this.value.replace(/[^\d.]/g, '');
		calc();
	});

	document.querySelector('.bath input').addEventListener('input', function(){
		this.value = this.value.replace(/[^\d.]/g, '');
		calc();
	});

	for (var i = 0; i < document.querySelectorAll('.calculator__radio-place input').length; i++) {
		document.querySelectorAll('.calculator__radio-place input')[i].addEventListener('change', function(){
			calc();
		});
	}

	for (var i = 0; i < document.querySelectorAll('.calculator__radio_choice input').length; i++) {
		document.querySelectorAll('.calculator__radio_choice input')[i].addEventListener('change', function(){
			calc();
		});
	}

	for (var i = 0; i < document.querySelectorAll('.calculator__form-element-type input').length; i++) {
		document.querySelectorAll('.calculator__form-element-type input')[i].addEventListener('change', function(){
			calc();
		});
	}

	for (var i = 0; i < document.querySelectorAll('.check_row_1 input').length; i++) {
		document.querySelectorAll('.check_row_1 input')[i].addEventListener('change', function(){
			calc();
		});
	}

	window.addEventListener('scroll', function(){
		if (this.pageYOffset > 5) {
			document.querySelector('.fixed-header').classList.add('fixed-header--shadow')
		} else {
			if (document.querySelector('.fixed-header').classList.contains('fixed-header--shadow')) {
				document.querySelector('.fixed-header').classList.remove('fixed-header--shadow')
			}
		}
	});

})
