'use strict';

function AppState() {
  this.allProducts = [];
}
AppState.prototype.instantiateProducts = function () {
  const productNames = [('bag', 'assets/bag.jpg'), 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}
AppState.prototype.saveToLocalStorage = function () {
  // Convert the allProducts array to JSON
  const productsJSON = JSON.stringify(this.allProducts);

  // Save the JSON string to local storage
  localStorage.setItem('products', productsJSON);
}

AppState.prototype.loadItems = function () {

  // Retrieve the products from local storage
  const storedProducts = localStorage.getItem('products');

  if (storedProducts) {
    // If there are stored products, parse them and set them to allProducts
    this.allProducts = JSON.parse(storedProducts);
  } else {
  this.instantiateProducts();
}
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
}
