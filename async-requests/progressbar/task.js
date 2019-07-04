let progress = document.getElementById('progress');

form.addEventListener('submit', check);

function check(event) {
    event.preventDefault();

    let form = document.getElementById('form');
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.onprogress = function (event) {
        progress.value = event.loaded / 100000000;
    }

    xhr.send(formData);
}