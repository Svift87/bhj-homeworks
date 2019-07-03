let progress = document.getElementById( 'progress' ),
    form = document.getElementById('form'),
    send = document.getElementById('send');



send.addEventListener('click', function() {
//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', false);
    
//     xhr.send();
    
//     xhr.upload.onprogress = function () {
//         progress.value = 0.5;
//     }
    
//     xhr.upload.onload = function () {
//         progress.value = 1;
//     }
    send.preventDefault();

    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.open('POST', form.action);

    request.addEventListener('readystatechange', function() {
        if (this.readyState == request.DONE && this.status == 200) {
            progress.value = 1;
        }
    });
    request.send(formData);
        
});