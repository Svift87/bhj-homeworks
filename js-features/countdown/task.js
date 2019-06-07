function time () {
    let timer = document.querySelector('#timer');
    timer.innerHTML = timer.innerHTML - 1;

    if (timer.innerHTML <= 0) {
        timer.innerHTML = 0;
        alert('Вы победили в конкурсе!');
    }
};
setInterval(time, 1000);