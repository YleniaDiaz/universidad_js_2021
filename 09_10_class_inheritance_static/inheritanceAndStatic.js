class Product {
    //atributo static
    static countProducts = 0;

    //constante static
    static get MAX_PRODUCTS() {
        return 5;
    }

    constructor(description, price) {
        Product.countProducts++;
        if (Product.countProducts <= Product.MAX_PRODUCTS) {
            this.id = Product.countProducts;
            this._price = price;
            this._description = description;
        } else {
            console.log('Límite completo');
            return;
        }
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

    returnAllData() {
        return `ID: ${this.id} - Descripción: ${this._description} - Precio: ${this._price}€`;
    }

    //sobreescritura del toString
    toString() {
        //polimorfismo
        return this.returnAllData();
    }

    static sayHello() {
        console.log('Hola');
    }

    static sayHelloToProduct(aProduct) {
        console.log(`Hola ${aProduct.description}`);
    }
}

class Book extends Product {
    constructor(description, price, title) {
        super(description, price);
        this._title = title;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    returnAllData() {
        return `${super.returnAllData()} - Título: ${this._title}`;
    }
}

let product1 = new Product('Testing class Product', 1.20);
console.log(product1.toString());

let book1 = new Book('Testing class Book', 1.20, 'Una llama entre cenizas');
console.log(book1.toString());

let product2 = new Product('Testing class Product', 1.50);
let product3 = new Product('Testing class Product', 0.20);
let product4 = new Product('Testing class Product', 2.20);
let product5 = new Product('Testing class Product', 2.20);

console.log(product5); //vacío porque llegó al límite de productos

//Static functions
Product.sayHello();
Product.sayHelloToProduct(product1);

//Atributo static
console.log(Product.countProducts);

//constante static
console.log(Product.MAX_PRODUCTS);