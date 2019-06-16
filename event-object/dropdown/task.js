const dropdown = document.querySelectorAll('.dropdown');

for (let a = 0; dropdown.length > a; a++) {
    const dropdownValue = dropdown[a].querySelector('.dropdown__value');
    const dropdownList = dropdown[a].querySelector('.dropdown__list');
    const dropdownLink = dropdown[a].querySelectorAll('.dropdown__link');

    dropdownValue.addEventListener('click', function(){
        dropdownList.classList.toggle('dropdown__list_active');
    });
    
    for (let i = 0; dropdownLink.length > i; i++) {    
        dropdownLink[i].addEventListener('click', function () { 
            if (dropdownLink[i].getAttribute('href') == '') {
                event.preventDefault();
                dropdownValue.innerText = dropdownLink[i].innerText;
                dropdownList.classList.remove('dropdown__list_active');
            }           
        });
    }
}







// Подскажите почему когда мы ищем элемент через getElementsByClassName, мне выдают массив даже если элемент на странице один, и приходится либо создавать цикл либо жестко указывать позицию элемента?

// let dropdownValue = document.getElementsByClassName('dropdown__value');

// dropdownValue[0].addEventListener('click', function(){
//     console.log('dsadsads')
// })