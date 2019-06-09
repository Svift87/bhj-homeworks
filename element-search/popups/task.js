let showSuccess = document.querySelector('.show-success'),
    modalMain = document.querySelector('#modal_main'),
    modalSuccess = document.querySelector('#modal_success'),
    modalClose = document.querySelectorAll('.modal__close');

modalMain.classList.add('modal_active');

for (let i = 0; modalClose.length > i; i++) {
    modalClose[i].addEventListener('click', function() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    })
}

showSuccess.addEventListener('click', function() {
    modalSuccess.classList.add('modal_active');
})