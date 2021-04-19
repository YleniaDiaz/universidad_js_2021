class InpuDevice {
    constructor(inputType, brand) {
        this._inputType = inputType;
        this._brand = brand;
    }

    get inputType() { return this._inputType; }
    set inputType(inputType) { this._inputType = inputType; }

    get brand() { return this._brand; }
    set brand(brand) { this._brand = brand; }

    toString() { return `Tipo entrada: ${this._inputType} - Marca: ${this._brand}`; }
}

class Mouse extends InpuDevice {
    static countMouse = 0;

    constructor(inputType, brand) {
        super(inputType, brand);
        this._idMouse = ++Mouse.countMouse;
    }

    get idMouse() { return this._idMouse; }

    toString() { return `Ratón -> ${this._idMouse} - ${super.toString()}`; }
}

class Keyboard extends InpuDevice {
    static countKeyboard = 0;

    constructor(inputType, brand) {
        super(inputType, brand);
        this._idKeyboard = ++Keyboard.countKeyboard;
    }

    get idKeyboard() { return this._idKeyboard; }

    toString() { return `Teclado -> ${this._idKeyboard} - ${super.toString()}`; }
}

class Screen {
    static countScreen = 0;

    constructor(brand, size) {
        this._idScreen = ++Screen.countScreen;
        this._brand = brand;
        this._size = size;
    }

    get idScreen() { return this._idScreen; }

    get brand() { return this._brand; }
    set brand(brand) { this._brand = brand; }

    get size() { return this._size; }
    set size(size) { this._size = size; }

    toString() { return `Monitor -> ${this._idScreen} - Marca: ${this._brand} - Tamaño: ${this._size} pulgadas`; }
}

class PC {
    static countPC = 0;

    constructor(name, screen, mouse, keyboard) {
        this._idPC = ++PC.countPC;
        this._name = name;
        this._screen = screen;
        this._mouse = mouse;
        this._keyboard = keyboard;
    }

    get idPC() { return this._idPC; }

    get screen() { return this._screen; }
    set screen(screen) { this._screen = screen; }

    get mouse() { return this._mouse; }
    set mouse(mouse) { this._mouse = mouse; }

    get keyboard() { return this._keyboard; }
    set keyboard(keyboard) { this._keyboard = keyboard; }

    toString() { return `******** PC -> ${this._idPC} - ${this._name} ********\n${this._screen}\n${this._mouse}\n${this._keyboard}`; }
}

class Order {
    static countOder = 0;

    constructor() {
        this._idOrder = ++Order.countOder;
        this._PCs = [];
    }

    get idOrder() { return this.idOrder; }

    addPC(pc) {
        this._PCs.push(pc);
    }

    showOrder() {
        let pcOrder = '';
        for (let pc of this._PCs) {
            pcOrder += `${pc}\n\n`;
        }
        return `------------ORDEN ${this._idOrder}------------\n${pcOrder}`;
    }
}

let mouse = new Mouse('USB', 'HP');
//console.log(mouse.toString());
let mouse1 = new Mouse('Bluetooth', 'Trust');
//mouse1.brand = 'Dell';
//console.log(mouse1.toString());

let keyboard = new Keyboard('Wireless', 'Razer');
//console.log(keyboard.toString());
let keyboard1 = new Keyboard('Bluetooth', 'Logitech');
//console.log(keyboard1.toString());

let screen = new Screen('Samsung', 32);
//console.log(screen.toString());
let screen1 = new Screen('LG', 20);
//console.log(screen1.toString());

let pc = new PC('MSI', screen, mouse, keyboard1);
//console.log(`${pc}`);
let pc1 = new PC('Omen', screen1, mouse1, keyboard);
//console.log(pc1.toString());

let orderPC = new Order();
orderPC.addPC(pc);
orderPC.addPC(pc1);
console.log(orderPC.showOrder());