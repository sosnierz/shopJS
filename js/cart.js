// let carts = document.querySelectorAll('.addToCart');
// const cartSpan = document.querySelector('.social.right li:last-child span');


// for(let i=0; i < carts.length; i++) {
// 	carts[i].addEventListener('click', () => {
// 		cartNumbers(products[i]);
// 		totalCost(products[i]);
// 	})
// }


// function checkCartNumber() {
// 	let productNumbers = localStorage.getItem('cartNumbers');
// 	if(productNumbers) {
// 		cartSpan.textContent = productNumbers;
// 	}
// }


// function cartNumbers(product) {
// 	let productNumbers = localStorage.getItem('cartNumbers');
// 	productNumbers = parseInt(productNumbers);

// 	if(productNumbers) {
// 		localStorage.setItem('cartNumbers', productNumbers +1);
// 		cartSpan.textContent = productNumbers +1;
// 	}
// 	else{
// 		localStorage.setItem('cartNumbers', 1);
// 		cartSpan.textContent = 1;
// 	}
// 	setItems(product);
// 	}


// 	function setItems(product) {
// 		let cartItems = localStorage.getItem('productsInCart');
// 		cartItems = JSON.parse(cartItems);

// 		if(cartItems != null) {
// 			if(cartItems[product.id] == undefined) {
// 				cartItems = {
// 					...cartItems,
// 					[product.id]:product
// 				}
// 			}
// 			cartItems[product.id].inCart += 1;
// 		}
// 		else {
// 		product.inCart = 1;
// 		cartItems = {
// 			[product.id]:product
// 		}
// 	}
// 		localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// 	}

// 	function totalCost(product) {
// 		let cartCost = localStorage.getItem('totalCost');
//         let cartItems = localStorage.getItem('productsInCart');
// 		cartItems = JSON.parse(cartItems);

// 		if(cartCost != null) {
// 			cartCost = parseInt(cartCost);
// 			localStorage.setItem('totalCost', cartCost + product.price);
// 		}
// 		else {
// 			localStorage.setItem("totalCost", product.price);
// 		}
//      	}

	

// 	function displayCart() {
// 		let cartItems = localStorage.getItem('productsInCart');
// 		cartItems = JSON.parse(cartItems);
// 		let cartProducts = document.querySelector('.itemsCart');
// 		let totalProducts =  document.querySelector('.total');
// 		let cartCost = localStorage.getItem('totalCost');
// 		if(cartItems && cartProducts) {
// 			cartProducts.innerHTML = ''
// 			Object.values(cartItems).map(item => {
// 				cartProducts.innerHTML +=
// 				`<div class="cart-item message" value="${item.id}">
// 				<h3 class="subtitle">${item.title} ${item.model}</h3>
// 				<div class="cart-right">
// 				  <div class="priceItem"><span> ${item.price.toFixed(2)} zł</span></div>
// 					<div class="changeQuantity">
					  
// 					<button class="button is-danger minus" value="${item.id} onclick="decrementCart()"><span class="icon is-small"><i class="fas fa-minus"></i></span></button>
// 					<span class="numQ" value='${item.inCart}'>${item.inCart}</span>
					
// 					<button  class="button is-danger plus" value="${item.id} onclick="incrementCart()"><span class="icon is-small"><i class="fas fa-plus"></i></span></button> 
// 					 </div>
// 				</div>
// 				<div class="price is-size-4">
// 				   ${(item.price*item.inCart).toFixed(2)} zł
// 				</div>
// 				<div class="remove">
// 				 <button class="button is-danger delete" onclick="deleteItem(this)"><span class="icon is-small"><i class="fas fa-times"></i></span></button>
				  
// 				</div>
// 			  </div>
// 			  `
// 			});
// 			totalProducts.innerHTML += 
// 			` <div class="message-header">
// 			<h2 class="subtitle">Razem: <span>${cartCost} zł </span> </h2>
// 		</div>`
// 		}

// 	}
// checkCartNumber();
// displayCart()

// function deleteItem(id) {
//     let cartItems = localStorage.getItem('productsInCart');
// 		cartItems = JSON.parse(cartItems);
//        let i = cartItems.findIndex(product => product.id === id)
//        if(i!==-1){
//         cartItems.splice(i,1);
            
//         }
//       localStorage.setItem('productsInCart', JSON.stringify(cartItems));

// };
window.onload = function(){
	//cart box
	const iconShopping = document.querySelector('.social.right li:last-child span');
	
	


	// adding data to localstorage
	const attToCartBtn = document.getElementsByClassName('addToCart');
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
                    id:i+1,
                    name:e.target.parentElement.parentElement.children[1].textContent,
                    price:e.target.parentElement.parentElement.children[2].textContent,
                    inCart:1
					};
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
	// adding data to shopping cart 
	
	let no = 0;
	JSON.parse(localStorage.getItem('items')).map(data=>{
		no = no+data.no
;	});
	iconShopping.innerHTML = no;


	//adding cartbox data in table
	const cardBoxTable = document.querySelector('.itemsCart');
	
	let tableData = '';
	
     if(JSON.parse(localStorage.getItem('items'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(localStorage.getItem('items')).map(data=>{
            const price = parseInt(data.price);
            const total = price*data.inCart;
           
             
			tableData += `
            <div class="cart-item message">
            <div class="cart-left">
                <h3>ID: ${data.id} </h3>
                <h3 class="subtitle">${data.name}</h3>
                </div>
                <div class="cart-right">
                    <div class="priceItem"><span> ${price.toFixed(2)} </span></div>
                <div class="changeQuantity">                
                    <input class="numQ" value='${data.inCart}'></input>
                </div>
                </div>
            <div class="price is-size-4">
               <span> ${total.toFixed(2)}  zł </span>
            </div>
           <div class="remove">
            <button class="button is-danger delete" onclick="deleteItem(this)"><span class="icon is-small"><i class="fas fa-times"></i></span></button>
                              
        </div>
            </div>
           	  `;
                 
		});
	}
	cardBoxTable.innerHTML = tableData;

}




