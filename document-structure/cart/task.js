let cartProducts = document.querySelector('.cart__products'),
    product = document.querySelectorAll('.product');


let arr = [];

for (let i = 0; product.length > i; i++) {
    let productImage = product[i].querySelector('.product__image'),
        productQuantityValue = product[i].querySelector('.product__quantity-value'),
        productQuantityControlDec = product[i].querySelector('.product__quantity-control_dec'),
        productQuantityControlInc = product[i].querySelector('.product__quantity-control_inc'),
        productAdd = product[i].querySelector('.product__add'),
        dataId = product[i].dataset.id;

    productQuantityControlInc.addEventListener('click', function () {
        productQuantityValue.innerText++;
    });
    productQuantityControlDec.addEventListener('click', function () {
        if (productQuantityValue.innerText > 1) {
            productQuantityValue.innerText--;    
        }        
    });

    productAdd.addEventListener('click', function () {  
        arr.push({
            dataId,
            quantity: productQuantityValue.innerText,
            image: productImage.src
        });
        
        cartProducts.insertAdjacentHTML('beforeEnd',  
        `<div class="cart__product" data-id=${arr[arr.length - 1].dataId}>
            <img class="cart__product-image" src=${arr[arr.length - 1].image}>
            <div class="cart__product-count">${arr[arr.length - 1].quantity}</div>
        </div>`
        );
              
    });
};

