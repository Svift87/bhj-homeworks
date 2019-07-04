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

    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    request.addEventListener('readystatechange', function() {
        readyState
    });
        
});