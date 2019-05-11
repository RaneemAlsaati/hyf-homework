var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();
// 
class Circle{
 constructor (x, y, r, startAngle, endAngle, fillColor){
 this.x = x;
 this.y = y;
 this.r = r;
 this.startAngle = startAngle;
 this.endAngle = endAngle;
 this.fillColor = fillColor;
}

}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
c1.draw();

// 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(productName) {
        this.jobs = this.jobs.filter((product => product.name !== productName))
    }

    searchProduct(productName) {
        this.products = this.products.filter(product => product.name === productName)
    }

    getTotal() {
        // Implement functionality here
    }

    renderProducts() {
        let app = document.getElementById("app");
        let heading = document.createElement("h1");
        heading.innerHTML = "products";
        app.appendChild(heading);
    
        for (let name of this.name) {
          // Create HTML elements
          let productsDiv = document.createElement("div");
          let product = document.createElement("h2");
          let name = document.createElement("p");
          let prise = document.createElement("prise");
    }
    
  }
}

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);
shoppingCart.addProduct(khar);
shoppingCart.renderProducts();