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
