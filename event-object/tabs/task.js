const tab = document.getElementsByClassName('tab'),
    tabContent = document.getElementsByClassName('tab__content');

for (let i = 0; tab.length > i; i++) {    
    tab[i].addEventListener('click', function () {
        for (let a = 0; tab.length > a; a++) {
            tab[a].classList.remove('tab_active');
            tabContent[a].classList.remove('tab__content_active');
        }
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
}