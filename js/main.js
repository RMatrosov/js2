class Product {
    constructor(product, img = 'https://placehold.it/150x100') {
        let { title, price = 0, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    
        render() {
            return `<div class="product-item">
        <img src="${this.img}" alt="${this.title}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
        </div>`
        }
    
}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData();
        this._render();
        
    }

    sum() {
        let totalPrice = 0;
        for (let element of this.products) {
            totalPrice += element.price;
        }
        return totalPrices;
    }

    _fetchData() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Keyboard', price: 200 },
            { id: 3, title: 'Mouse', price: 100 },
            { id: 4, title: 'Gamepad' },
        ];
    }

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

const list = new ProductsList();


class Cart {
    constructor() {
        this.data = []; // массив для хранения дынных
        this.items = []; // массив для хранения дынных
        
        _fetchData() // данные для корзины
        
        _render() // визуализация корзины
    }
    // ф-я полной стоимости
    sum() {
        let totalPrice = 0;
        for (let element of this.items) {
            totalPrice += element.some();
        }
        return totalPrices;
    }
    
    _fetchData() { }// данные для корзины
    
    _render() { }// визуализация корзины
}



/* const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
];

const renderProduct = (product, img = 'http://placehold.it/150x100') => {
    return `<div class="product-item">
    <img src="${img}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.price}</p>
    <button class="buy-btn">Купить</button>
    </div>`
};

const render = productsList => {

    document.querySelector('.products').innerHTML = productsList.map(product => renderProduct(product)).join('');
};

render(products); */