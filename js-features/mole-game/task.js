function kickMole() {
    let hole = document.querySelectorAll('.hole'),
        dead = document.querySelector('#dead'),
        lost = document.querySelector('#lost');

    for (let i = 0;hole.length > i; i++) {
        hole[i].addEventListener('click', function() {
            if (hole[i].classList.contains( 'hole_has-mole' ) == true) {
                dead.innerHTML = +dead.innerHTML + 1;
            } else {
                lost.innerHTML = +lost.innerHTML + 1;
            }

            if (dead.innerHTML == 10) {
                alert('Вы победили!');
                dead.innerHTML = 0;
                lost.innerHTML = 0;
            }

            if (lost.innerHTML == 5) {
                alert('Вы проиграли!');
                dead.innerHTML = 0;
                lost.innerHTML = 0;
            }
        })
    }
}

kickMole()