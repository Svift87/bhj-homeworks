let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.slider__arrow_prev'),
        next = document.querySelector('.slider__arrow_next'),
        dotsWrap = document.querySelector('.slider__dots'),
        dots = document.querySelectorAll('.slider__dot');

    showSlides(slideIndex);

    function showSlides (n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        
        slides.forEach((item) => item.classList.remove('slider__item_active'));
        dots.forEach((item) => item.classList.remove('slider__dot_active'));

        slides[slideIndex - 1].classList.add('slider__item_active');
        dots[slideIndex - 1].classList.add('slider__dot_active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function curentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    
    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('slider__dot') && event.target == dots[i - 1]) {
                curentSlide(i);
            }
        }
    });