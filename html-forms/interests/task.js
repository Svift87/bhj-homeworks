

let interest  = document.querySelectorAll('.interest');

for (let i = 0; interest.length>i;i++) {
    let checkInterest = interest[i].querySelector('.interest__check'),
        interestCheck =  interest[i].querySelectorAll('.interests_active .interest__check');

    for (let a = 0; interestCheck.length > a; a++) {
        checkInterest.addEventListener('click', function () {            
            if (checkInterest.checked) {
                interestCheck[a].setAttribute('checked', 'checked');
            } else {
                interestCheck[a].removeAttribute('checked');
            }            
        });
    }
}
    