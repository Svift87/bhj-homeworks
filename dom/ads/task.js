

(function () {
    let rotatorCase = document.getElementsByClassName('rotator__case');
    
    for (let i = 0; rotatorCase.length > i; i++) {
        rotatorCase[i].style.color = rotatorCase[i].dataset.color;
    }

    let i = 0;    
    setInterval(function () {        
        if (rotatorCase.length == i + 1) {
            rotatorCase[i].classList.remove('rotator__case_active');
            i = 0;
            rotatorCase[i].classList.add('rotator__case_active');
        } else if (rotatorCase.length != i) {
            rotatorCase[i + 1].classList.add('rotator__case_active');
            rotatorCase[i].classList.remove('rotator__case_active');
            i++;
        }        
    }, +rotatorCase[i].dataset.speed);
}());