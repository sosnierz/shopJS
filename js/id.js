const imagesDiv = document.querySelector('.imagesDiv');


   
   const createDivElements = () => {
        
       for (let i = 0; i < 6; i++ ){
       const div = document.createElement('div');
	   div.classList.add('imageDiv', 'image', 'shopProduct');
       div.innerHTML = ` 
       <a href="#"><img class=""src="../images/lamps/7-DIANA/326.png"/>
       <h3 class="subtitle">Nazwa<br>Model</h3>
       <h5 >150.00 zł</h5></a></form>
       <form id="form" action="/cart/products" method="POST" >
         <input hidden value="" name="productId" />
         <button class="button has-icon is-inverted addCart" >Dodaj do
         <i class="fa fa-shopping-cart"></i></button>
       </form>`;
         imagesDiv.appendChild(div);
       }
       
   }
   createDivElements()
