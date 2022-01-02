let carts = document.querySelectorAll('.addToCart');
const cartSpan = document.querySelector('.social.right li:last-child span');


for(let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}


function checkCartNumber() {
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers) {
		cartSpan.textContent = productNumbers;
	}
}


function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers +1);
		cartSpan.textContent = productNumbers +1;
	}
	else{
		localStorage.setItem('cartNumbers', 1);
		cartSpan.textContent = 1;
	}
	setItems(product);
	}


	function setItems(product) {
		let cartItems = localStorage.getItem('productsInCart');
		cartItems = JSON.parse(cartItems);

		if(cartItems != null) {
			if(cartItems[product.model] == undefined) {
				cartItems = {
					...cartItems,
					[product.model]:product
				}
			}
			cartItems[product.model].inCart += 1;
		}
		else {
		product.inCart = 1;
		cartItems = {
			[product.model]:product
		}
	}
		localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	}

	function totalCost(product) {
		let cartCost = localStorage.getItem('totalCost');
        let cartItems = localStorage.getItem('productsInCart');
		cartItems = JSON.parse(cartItems);

		if(cartCost != null) {
			cartCost = parseInt(cartCost);
			localStorage.setItem('totalCost', cartCost + product.price);
		}
		else {
			localStorage.setItem("totalCost", product.price);
		}
     	}

	

	function displayCart() {
		let cartItems = localStorage.getItem('productsInCart');
		cartItems = JSON.parse(cartItems);
		let cartProducts = document.querySelector('.itemsCart');
		let totalProducts =  document.querySelector('.total');
		let cartCost = localStorage.getItem('totalCost');
		if(cartItems && cartProducts) {
			cartProducts.innerHTML = ''
			Object.values(cartItems).map(item => {
				cartProducts.innerHTML +=
				`<div class="cart-item message" data-id="${item.id}">
				<h3 class="subtitle">${item.title} ${item.model}</h3>
				<div class="cart-right">
				  <div class="priceItem"><span> ${item.price.toFixed(2)} zł</span></div>
					<div class="changeQuantity">
					  
					<button class="button is-danger minus" value="${item.id} onclick="decrementCart()"><span class="icon is-small"><i class="fas fa-minus"></i></span></button>
					<span class="numQ" value='${item.inCart}'>${item.inCart}</span>
					
					<button  class="button is-danger plus" value="${item.id} onclick="incrementCart()"><span class="icon is-small"><i class="fas fa-plus"></i></span></button> 
					 </div>
				</div>
				<div class="price is-size-4">
				   ${(item.price*item.inCart).toFixed(2)} zł
				</div>
				<div class="remove">
				 <button class="button is-danger delete" onclick="deleteItem()"><span class="icon is-small"><i class="fas fa-times"></i></span></button>
				  
				</div>
			  </div>
			  `
			});
			totalProducts.innerHTML += 
			` <div class="message-header">
			<h2 class="subtitle">Razem: <span>${cartCost} zł </span> </h2>
		</div>`
		}

	}
checkCartNumber();
displayCart()

function deleteItem(e) {
	console.log(e.target.parentElement.parentElement.textContent)
	
}