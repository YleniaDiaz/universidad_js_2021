class Product {
    static countProducts = 0;

    constructor(name, price) {
        this._idProduct = ++Product.countProducts;
        this._name = name;
        this._price = price;
    }

    get idProduct() { return this._idProduct; }

    get name() { return this._name; }

    set name(name) { this._name = name; }

    get price() { return this._price; }

    set price(price) { this._price = price; }

    toString() {
        return `${this._idProduct} - ${this._name} ${this._price}€`;
    }
}

class Order {
    static countOrders = 0;
    static get MAX_PRODUCTS() { return 5; }

    constructor() {
        this._idOrder = ++Order.countOrders;
        this._products = [];
        this._addedProducts = 0;
    }

    get idOrder() { return this._idOrder; }

    addProduct(product) {
        if (this._products.length < Order.MAX_PRODUCTS) {
            this._products.push(product);
        } else {
            console.log('Límite de productos alcanzado.');
            return;
        }
    }

    totalPrice() {
        let total = 0;
        for (let product of this._products) {
            total += product.price;
        }
        return total;
    }

    showOrder() {
        let orderProducts = '';
        for (let product of this._products) {
            orderProducts += `${product.toString()}\n`;
        }
        return `----------ORDEN----------\nOrden: ${this._idOrder} - Total: ${this.totalPrice()}€\n----------PRODUCTOS----------\n${orderProducts}`;
    }
}

let product = new Product('Plátanos', 1.20);
//console.log(product.toString());
let product2 = new Product('Nísperos', 0.95);
//console.log(product2.toString());
let product3 = new Product('Mandarinas', 1.30);
let product4 = new Product('Aguacate', 2.30);
let product5 = new Product('Limón', 1.00);
let product6 = new Product('Peras', 1.60);


let order = new Order();
order.addProduct(product);
order.addProduct(product2);
order.addProduct(product6);
order.addProduct(product4);
order.addProduct(product5);
order.addProduct(product6); //No entra porque ya llegó al límite de productos
console.log(order.showOrder());