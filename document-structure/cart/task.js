const products = document.querySelectorAll('.product');
const controls = document.querySelectorAll('.product__quantity-controls');
const decrease = document.querySelectorAll('.product__quantity-control_dec');
const increase = document.querySelectorAll('.product__quantity-control_inc');
const number = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector('.cart__products');

for (let i = 0; i < products.length; i++) {
	controls[i].addEventListener('click', (event) => {
		if (event.target === decrease[i] && number[i].textContent == 0) {
			number[i].textContent;
		} else if (event.target === decrease[i]) {
			number[i].textContent--;
		} else if (event.target === increase[i]) {
			number[i].textContent++;
		}
	});
}

document.querySelector('.products').addEventListener('click', (event) => {
	let target = event.target;
	if (target.className != 'product__add') return;
	let productId = target.closest('.product').dataset.id;
	let productQuantity = target.closest('.product').querySelector('.product__quantity-value').textContent;
	if ( !cart.querySelector(`[data-id = "${productId}"]`) ) {
		const cartProduct = document.createElement('div');
		cart.appendChild(cartProduct);
		cartProduct.setAttribute('class', 'cart__product');
		cartProduct.setAttribute('data-id', productId);

		const productImg = document.createElement('img');
		cartProduct.appendChild(productImg);
		productImg.setAttribute('class', 'cart__product-image');
		productImg.setAttribute('src', target.closest('.product').querySelector('.product__image').getAttribute('src'));

		const productCount = document.createElement('div');
		cartProduct.appendChild(productCount);
		productCount.setAttribute('class', 'cart__product-count');
		productCount.innerText = productQuantity;
	} else {
		let item = cart.querySelector(`[data-id = "${productId}"]`);
		let addNumber = Number(productQuantity) + Number(item.textContent);
		item.querySelector('.cart__product-count').innerText = addNumber;
	}
});