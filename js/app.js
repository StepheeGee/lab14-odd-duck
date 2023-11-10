'use strict';

function Product(name) {
  this.name = name;
  this.source = null;
  this.timesClicked = 0;
  this.timesShown = 0;
}

Product.prototype.findValidExtension = function (callback) {
  const possibleExtensions = ['jpg', 'png'];

  const tryExtension = (extensionIndex) => {
    if (extensionIndex >= possibleExtensions.length) {
     
      callback('assets/default.jpg');
      return;
    }

    const currentExtension = possibleExtensions[extensionIndex];
    const source = `assets/${this.name}.${currentExtension}`;
    const img = new Image();

    img.onload = () => {
      
      callback(source);
    };

    img.onerror = () => {
      
      tryExtension(extensionIndex + 1);
    };

    img.src = source;
  };

  tryExtension(0);
};

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {
  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (const name of productNames) {
    const product = new Product(name);
    this.allProducts.push(product);
    this.loadProductImage(product); 
  }
};

AppState.prototype.loadProductImage = function (product) {
  product.findValidExtension((source) => {
    product.source = source;
    console.log(`${product.name} source: ${source}`);
  });
};

AppState.prototype.saveToLocalStorage = function () {
  
  const productsJSON = JSON.stringify(this.allProducts);

  
  localStorage.setItem('products', productsJSON);
};

AppState.prototype.loadItems = function () {
  
  const storedProducts = localStorage.getItem('products');

  if (storedProducts) {
    
    this.allProducts = JSON.parse(storedProducts);
  } else {
    this.instantiateProducts();
  }
};

const appState = new AppState();
appState.loadItems();
