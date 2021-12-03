
const images = document.querySelector('.images');
const allCheckboxes = [...document.querySelectorAll('input[type=checkbox]')];
const allA = document.querySelectorAll('.category');
const fabrics = document.querySelectorAll(".fabric");
const aPrice = document.querySelectorAll('.input.price');
const bulbs = document.querySelectorAll('.bulb');
const btn = document.querySelector('.clear');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const burger = document.querySelector(".burgers");
const activeAside = document.querySelectorAll(".active");



// render Products cart
function renderProdcuts() {
  products.forEach((product) => {
    images.innerHTML +=`
<div data-price class="image shopProduct ${product.category} ${product.fabric.join(' ')} ${product.bulb}" > <img class="" src=" ${product.image}" alt="${product.title}"/>
<h3 class="subtitle">${product.title} <br>${product.model}</h3>
<h5 class="priceProduct" >${product.price.toFixed(2)} zł</h5>

<div class="details">
<button class="button has-icon is-inverted">Dodaj do <i
class="fa fa-shopping-cart"></i></button>
<button class="button has-icon is-inverted">Więcej...</button>
 </div>
</div>`
});
}
renderProdcuts();

// active aside burger
burger.addEventListener("click", function () {
  for (let i = 0; i < activeAside.length; i++) {
      activeAside[i].classList.toggle("show")
  };
}) ;

// filters

const shopProduct= Array.from(document.querySelectorAll('.shopProduct'));

// allCheckboxes.forEach(function(checkbox) {
// checkbox.addEventListener('change', e => {
  
//   if(e.target.checked){
//     e.preventDefault()
        
//     // const category = e.target.getAttribute('data-filter');
//     const color = e.target.getAttribute('data-color');
//     const number = e.target.getAttribute('data-number');;
//     console.log(category, color, number);
    
//     shopProduct.forEach((product)=> {
    
//      if (product.classList.contains(category) || product.classList.contains(color) || product.classList.contains(number)) {
//               if(product.classList.contains(category) && product.classList.contains(color)){
//                 product.style.display = 'block'
//             } 
//             else if(product.classList.contains(category) &&product.classList.contains(number))
//             product.style.display = 'block'
//           else {
//                 product.style.display = 'block'
//             }      
//      }
//    else{
//           product.style.display = 'none'
//         }

        
//     });
// }
// });
// });

  
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
const high = document.querySelector('.high');
high.addEventListener("change",()=>{
  let prices = document.getElementsByClassName('.priceProduct');
  prices.sort(function (a, b) {
  if(a > b)
  return -1;
  if(a < b)
  return 1;
  if(a==b)
  return 0 ;
  });
  });

//   function sortEl(){
   
//      sortNames = div.sort((a, b)=> { 
//       var item1 = document.querySelector(".subtitle").toUpperCase();
//       var item2 = document.querySelector(".subtitle").toUpperCase();
//       return item1-item2
  
//   });
//   field.append(...sortNames)
//   }


// add class show to products cart
