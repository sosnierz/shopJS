

function renderLayout() {
	body.innerHTML +=`
  <div data-price=${product.price} class="image shopProduct ${product.category} ${product.fabric.join(' ')} ${product.bulb} " > <img class="" src=" ${product.image}" alt="${product.title}"/>
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
  renderProducts();