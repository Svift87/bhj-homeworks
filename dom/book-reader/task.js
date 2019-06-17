let book = document.getElementById('book'),
    fontSize = document.querySelectorAll('.font-size');

fontSize[0].addEventListener('click', function () {
    for (let i = 0; fontSize.length> i;i++) {
        fontSize[i].classList.remove('font-size_active');
        book.classList.remove('book_fs-big');
    }
    event.preventDefault();
    fontSize[0].classList.add('font-size_active');
    book.classList.add('book_fs-small');
});

fontSize[1].addEventListener('click', function () {
    for (let i = 0; fontSize.length> i;i++) {
        fontSize[i].classList.remove('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
    event.preventDefault();
    fontSize[1].classList.add('font-size_active');
});

fontSize[2].addEventListener('click', function () {
    for (let i = 0; fontSize.length> i;i++) {
        fontSize[i].classList.remove('font-size_active');
        book.classList.remove('book_fs-small');
    }
    event.preventDefault();
    fontSize[2].classList.add('font-size_active');
    book.classList.add('book_fs-big');
});