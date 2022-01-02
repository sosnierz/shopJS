const images = document.querySelector('.images');
const allCheckboxes = [...document.querySelectorAll('input[type=checkbox]')];
const fabrics = document.querySelectorAll(".fabric");
const bulb = document.querySelectorAll('.bulb');
const btn = document.querySelector('.clear');
const burger = document.querySelector(".burgers");
const activeAside = document.querySelectorAll(".active");
const aCategories = document.querySelectorAll('.category');
const btn_prev= document.querySelector('.page-link.prev');
const btn_next= document.querySelector('.page-link.next');


// render Products cart
function renderProducts() {
  products.forEach((product) => {
    images.innerHTML +=`
<div data-price=${product.price} class="image shopProduct ${product.category} ${product.fabric.join(' ')} ${product.bulb} " > 
<input type="hidden"  value="${product.inCart}">
<img class="productImg" src=" ${product.image}" alt="${product.title}"/>
<h3 class="subtitle">${product.title} <br>${product.model}</h3>
<h5 class="priceProduct">${product.price.toFixed(2)} zł</h5>
<div class="details">
<button class="button has-icon is-inverted addToCart" data-product-id=${product.id}>Dodaj do <i
class="fa fa-shopping-cart"></i></button>
<button class="button has-icon is-inverted">Więcej...</button>
 </div>
</div>`
});
}
renderProducts();

// pagination
 const productsItems = document.querySelector(".images").children;
 const prev = document.querySelector(".prev");
 const next = document.querySelector(".next");
 const page = document.querySelector(".page-num");
 const maxItem = 20;
 let index = 1;
  
  const pagination = Math.ceil(productsItems.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
  })
  next.addEventListener("click",function(){
  	index++;
  	check();
    showItems();  
  })

  function check(){
  	 if(index==pagination){
  	 	next.classList.add("disabled");
  	 }
  	 else{
  	   next.classList.remove("disabled");	
  	 }

  	 if(index==1){
  	 	prev.classList.add("disabled");
  	 }
  	 else{
  	   prev.classList.remove("disabled");	
  	 }
  }

  function showItems() {
  	 for(let i=0;i<productsItems.length; i++){
  	 	productsItems[i].classList.remove("show");
  	 	productsItems[i].classList.add("hide");


  	    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
  	 	  // if i greater than and equal to (index*maxItem)-maxItem;
  		  // means  (1*8)-8=0 if index=2 then (2*8)-8=8
          productsItems[i].classList.remove("hide");
          productsItems[i].classList.add("show");
  	    }
  	    page.innerHTML=index;
  	 }

  	 	
  }

  window.onload=function(){
  	showItems();
  	check();
  }





// active aside burger
burger.addEventListener("click", function () {
  for (let i = 0; i < activeAside.length; i++) {
      activeAside[i].classList.toggle("show")
  };
}) ;

// filter categories
const shopProduct= document.querySelectorAll('.shopProduct');
for (i = 0; i < aCategories.length; i++) {

  aCategories[i].addEventListener('click', (e) => {
      e.preventDefault()
      
      const filter = e.target.dataset.filter;
      console.log(filter);
      
      shopProduct.forEach((product)=> {
          if (filter === 'all'){
              product.style.display = 'block'
          } else {
              if (product.classList.contains(filter)){
                  product.style.display = 'block'
              } else {
                  product.style.display = 'none'
              }
          }
      });
  });
};



// filters

function change() {
   
  const filters = {
   fabric: getClassOfCheckedCheckboxes(fabrics),
   bulb:getClassOfCheckedCheckboxes(bulb)
       };

  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  let classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (let i = 0; i < checkboxes.length; i++) {
     const cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("data-filter"));
      }
    }
  }

  return classes;
}

function filterResults(filters) {
 
  let hiddenElems = [];

  if (!shopProduct || shopProduct.length <= 0) {
    return;
  }
  for (let i = 0; i < shopProduct.length; i++) {
    let el = shopProduct[i];


//   fabric
    if (filters.fabric.length > 0) {
      let isHidden = true;

      for (let j = 0; j < filters.fabric.length; j++) {
        let filter = filters.fabric[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }
      if (isHidden) {
        hiddenElems.push(el);
      }
    }  
  
  //   bulb
    if (filters.bulb.length > 0) {
      let isHidden = true;

      for (let p = 0; p < filters.bulb.length; p++) {
        let filter = filters.bulb[p];
        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
     }
      if (isHidden) {
        hiddenElems.push(el);
      }
    }  
        

  for (let i = 0; i < shopProduct.length; i++) {
    shopProduct[i].style.display = "block";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.display = "none";
  }
  }
}


// button uncheckbox  
  function uncheckAll() {
      document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
        for (let i = 0; i < shopProduct.length; i++) {
          shopProduct[i].style.display = "block";
    }
  }
    btn.addEventListener('click', uncheckAll)      
  


// Search input
const input = document.querySelector('#search');
const divImages = document.querySelector('.images');
const divImage = document.querySelectorAll('.image');
const h3Elements = document.querySelectorAll('.subtitle');

const searchTask = (e) => {
 const searchText = e.target.value.toLowerCase()
 let tasks = [...divImage];
 console.log(tasks);
 tasks = tasks.filter(divImages => divImages.textContent.toLowerCase().includes(searchText))
 divImages.textContent = "";
 tasks.forEach(h3Elements => divImages.appendChild(h3Elements))
}
input.addEventListener('input', searchTask)



// Sorting cards
const selectResult = document.querySelector('.sorting');
let div = Array.from(divImages.children);

selectResult.addEventListener("change", function() {
  
  if(selectResult.value == "high"){
    sortHigh = div.sort((a, b) => {
      const ax = a.getAttribute('data-price');
      const bx = b.getAttribute('data-price');
      return ax-bx ;
    })
    divImages.append(...sortHigh)
  }
  else {
    sortLow = div.sort((a, b) => {
      const ax = a.getAttribute('data-price');
      const bx = b.getAttribute('data-price');
      return bx-ax ;
    })
    divImages.append(...sortLow)
  }
  
});


// add class show to products cart
