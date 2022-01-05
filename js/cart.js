
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
                    no:1
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
            const total = price*data.no;
			
             
			tableData += `
            <div data-id =${data.id} class="cart-item message">    
                <h3 class="subtitle">${data.name}</h3>
              <div class="cart-right">
                    <div class="priceItem"><span> ${price.toFixed(2)} </span></div>
                <div class="changeQuantity">                
                    <input class="numQ" value='${data.no}'></input>
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

function deleteItem(e) {

	let items = [];
	JSON.parse(localStorage.getItem('items')).map(data => {
		if (data.id != e.parentElement.parentElement.getAttribute('data-id')) {

			items.push(data);

		}
	});
	localStorage.setItem('items', JSON.stringify(items));
	window.location.reload();
};


const btnClear = document.querySelector('.buy');
btnClear.addEventListener('click',function(){  
localStorage.clear();
location.reload();
alert('Dziekujemy za zakupy !!!') });




