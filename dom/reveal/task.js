function isInViewport(element) {   
    window.addEventListener('scroll', function () {
        for (let i = 0; element.length > i; i++) {
            const viewportHeight = window.innerHeight / 2;
            const elementTop = element[i].getBoundingClientRect().top;
            if (elementTop < viewportHeight) { 
                element[i].classList.add('reveal_active');
            }
        }        
    })
    
};
const div = document.querySelectorAll('.reveal');
isInViewport(div);
