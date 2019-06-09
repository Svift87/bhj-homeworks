let menuLink = document.querySelectorAll('.menu__link'),
    menuItem = document.querySelectorAll('.menu__item');    

for (let i = 0; menuLink.length > i; i++) {    
    menuLink[i].addEventListener('click', function() {
        
        if (menuLink[i].getAttribute('href') == '') {
            let menuSub = menuItem[i].querySelector('.menu_sub');
            event.preventDefault();
            menuSub.classList.toggle('menu_active');
        }   
    })
}