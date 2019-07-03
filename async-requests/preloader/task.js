let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', false);
xhr.send();

let obj = JSON.parse(xhr.responseText),
    items = document.getElementById('items'),
    loader = document.getElementById('loader'),
    value = obj.response.Valute;
    
    console.log(Object.keys(value).length)
if (xhr.status == 200) {
    loader.classList.remove('loader_active');
};

for (let key in value) {
    items.insertAdjacentHTML('beforeEnd', `
        <div class="item">
            <div class="item__code">
                ${key}
            </div>
            <div class="item__value">
                ${value[key].Previous}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`
    );
}