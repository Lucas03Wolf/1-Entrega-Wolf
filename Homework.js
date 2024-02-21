class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Error: Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.error("Error: El código del producto ya existe.");
            return;
        }
        
        product.id = this.nextId++;
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.error("Error: Producto no encontrado.");
            return null;
        }
    }
}

// Prueba Funcionamiento:
const manager = new ProductManager();

manager.addProduct(new Product("Teclado", "Teclado Inalambrico", 1000, "teclado.jpg", "1234", 10));
manager.addProduct(new Product("Mouse", "Mouse Gamer", 20, "mouse.jpg", "5678", 20));

console.log(manager.getProducts());

console.log(manager.getProductById(1));
console.log(manager.getProductById(3));
