function clicker() {
    let cookie = document.querySelector('#cookie'),
        clickerCounter = document.querySelector('#clicker__counter');

    cookie.addEventListener('click', function() {
        clickerCounter.innerHTML = +clickerCounter.innerHTML + 1;
        if (+clickerCounter.innerHTML % 2 == 0) {
            cookie.style.width = 200 + 'px';
        } else {
            cookie.style.width = 170 + 'px';
        }
    })
}

clicker()