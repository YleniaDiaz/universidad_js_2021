class Product {
    constructor(description, price) {
        this._price = price;
        this._description = description;
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
        return `Descripción: ${this._description} - Precio: ${this._price}€`;
    }

    //sobreescritura del toString
    toString() {
        //polimorfismo
        return this.returnAllData();
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