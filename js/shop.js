const images = document.querySelector('.images');

const aCategories = document.querySelectorAll('.category');

// render Products cart
function renderProdcuts() {
  products.forEach((product) => {
    images.innerHTML +=`
<div  class="image shopProduct ${product.category} ${product.fabric.join(' ')} ${product.bulb} ${product.price}" > <img class="" src=" ${product.image}" alt="${product.title}"/>
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


const allCheckboxes = [...document.querySelectorAll('input[type=checkbox]')];
const fabrics = document.querySelectorAll(".fabric");
const bulb = document.querySelectorAll('.bulb');
const btn = document.querySelector('.clear');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const burger = document.querySelector(".burgers");
const activeAside = document.querySelectorAll(".active");




// active aside burger
burger.addEventListener("click", function () {
  for (let i = 0; i < activeAside.length; i++) {
      activeAside[i].classList.toggle("show")
  };
}) ;

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

  function sortEl(){
   
     sortNames = div.sort((a, b)=> { 
      var item1 = document.querySelector(".subtitle").toUpperCase();
      var item2 = document.querySelector(".subtitle").toUpperCase();
      return item1-item2
  
  });
  field.append(...sortNames)
  }


// add class show to products cart
