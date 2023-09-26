import utils from './utils.js';

class ProductManager {
	products;
	lastId;

	constructor() {
	constructor(path); {
		this.path = path;
		this.products = [];
		this.lastId = 0;
		this.lastId = 1;
	}
    addProduct(title, description, price, thumbnail, code, stock); {
		try {
			if (
				title === undefined ||
				description === undefined ||
				price === undefined ||
				thumbnail === undefined ||
				code === undefined ||
				stock === undefined
			) {
				throw new Error('Todos los campos son obligatorios');
            } 
            async addProduct(title, description, price, thumbnail, code, stock); {
                if (
                    title == undefined ||
                    description == undefined ||
                    price == undefined ||
                    thumbnail == undefined ||
                    code == undefined ||
                    stock == undefined
                ) {
                    throw new Error('Todos los campos son obligatorios');
                }
        
                    const existingProduct = this.products.find(
                        (product) => product.code === code
                    );
                    if (existingProduct) {
                        throw new Error('El código del producto ya está en uso');
                    }
                const existingProducts = this.products.find(
                    (product) => product.code === code
                );
        
                    this.lastId++;
                if (existingProducts) {
                    throw new Error('El codigo del producto ya esta en uso');
                } else {
                    const newProduct = {
                        id: this.lastId,
                        id: this.lastId++,
                        title,
                        description,
                        price,
        classProductManager ,{
                        stock,
                    };
                    this.products.push(newProduct);
        
                    try {
                        await utils.writeFile(this.path, this.products);
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
            }
            async getProducts();{
                try {
                    let data = await utils.readFile(this.path);
                    return data?.length > 0 ? this.products : 'Aun no hay registros';
                } catch (error) {
                    console.log(error);
                }
            }
        
            getProducts();{
                return this.products;
            async getProductById(id);{
                try {
                    let dato = await utils.readFile(this.path);
                    this.products = dato?.length > 0 ? dato : [];
                    const product = this.products.find((product) => product.id === id);
        
                    if (!product || product === undefined) {
                        throw new Error('No existe el producto solicitado');
                    }
        
                    return product;
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            }
        
            getProductById(id);{
            async updateProduct(id, data);{
                try {
                    const product = this.products.find((dato) => dato.id === id);
                    let products = await utils.readFile(this.path);
                    this.products = products?.length > 0 ? products : [];
        
                    if (product !== undefined) {
                        return product;
                    let productIndex = this.products.findIndex((dato) => dato.id === id);
                    if (productIndex !== -1) {
                        this.products[productIndex] = {
                            ...this.products[productIndex],
                            ...data,
                        };
                        await utils.writeFile(this.path, products);
                        return {
                            mensaje: 'producto actualizado',
                            producto: this.products[productIndex],
                        };
                    } else {
                        return { mensaje: 'no existe el producto solicitado' };
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        
            async deleteProduct(id);{
                try {
                    let products = await utils.readFile(this.path);
                    this.products = products?.length > 0 ? products : [];
        
                    throw new Error('No existe el producto solicitado');
                    const productIndex = this.products.findIndex(
                        (product) => product.id === id
                    );
                    if (productIndex !== -1) {
                        let product = this.products[productIndex];
                        this.products.splice(productIndex, 1);
                        await utils.writeFile(this.path, products);
                        return { mensaje: 'producto eliminado', producto: product };
                    } else {
                        return { mensaje: 'No existe el producto solicitado' };
                    }
                } catch (error) {
                    console.log(error);
                    return 'No existe el producto solicitado';
                }
            }
        }
        
        const productManager = new ProductManager();
        
        console.log(productManager.getProducts());
        //[]
        
        productManager.addProduct(
            'producto prueba 1',
            'Este es un producto prueba 1',
            200,
            'Sin imagen',
            'abc123',
            25
        );
        productManager.addProduct(
            'producto prueba 2',
            'Este es un producto prueba 2',
            280,
            'Sin imagen',
            'abc12345',
            5
        );
        productManager.addProduct(
            'producto prueba 3',
            'Este es un producto prueba 3',
            260,
            'Sin imagen',
            'abc12345678',
            2
        );
        //addProduct
        
        productManager.addProduct(
            'producto duplicado',
            'Este es otro producto',
            150,
            'Imagen duplicada',
            'abc123',
            10
        );
        //error
        
        console.log(productManager.getProductById(1));
        console.log(productManager.getProductById(2));
        console.log(productManager.getProductById(3));
        //getProductById
        const myFirstStore = new ProductManager('products.json');
        
        // //================ getProducts ========================
        // myFirstStore
        // 	.getProducts()
        // 	.then((products) => {
        // 		console.log(products);
        // 	})
        // 	.catch((error) => {
        // 		console.log(error.message);
        // 	});
        // // error "Aun no hay registros"
        
        // //================ addProduct ========================
        
        // myFirstStore.addProduct(
        // 	'producto prueba 1',
        // 	'Este es un producto prueba 1',
        // 	200,
        // 	'Sin imagen',
        // 	'abc123',
        // 	25
        // );
        // myFirstStore.addProduct(
        // 	'producto prueba 2',
        // 	'Este es un producto prueba 2',
        // 	280,
        // 	'Sin imagen',
        // 	'abc12345',
        // 	5
        // );
        // myFirstStore.addProduct(
        // 	'producto prueba 3',
        // 	'Este es un producto prueba 3',
        // 	260,
        // 	'Sin imagen',
        // 	'abc12345678',
        // 	2
        // );
        // myFirstStore.addProduct(
        // 	'producto prueba 4',
        // 	'Este es un producto prueba 4',
        // 	2200,
        // 	'Sin imagen',
        // 	'abc0987',
        // 	278
        // );
        // myFirstStore.addProduct(
        // 	'producto prueba 5',
        // 	'Este es un producto prueba 5',
        // 	839,
        // 	'Sin imagen',
        // 	'abc98765',
        // 	160
        // );
        // //addProduct 5 distintos productos
        
        // myFirstStore
        // 	.getProducts()
        // 	.then((products) => {
        // 		console.log(products);
        // 	})
        // 	.catch((error) => {
        // 		console.log(error.message);
        // 	});
        // //veo todos los productos
        
        // myFirstStore.addProduct(
        // 	'producto duplicado',
        // 	'Este es otro producto',
        // 	150,
        // 	'Imagen duplicada',
        // 	'abc123',
        // 	10
        // );
        // //error "El codigo del producto ya esta en uso"
        
        // myFirstStore.addProduct(
        // 	'producto con falta de datos',
        
        // 	150,
        // 	'Imagen duplicada',
        // 	'abc987123'
        // );
        // //error "Todos los campos son obligatorios"
        
        // //============= getProductById ========================
        
        // myFirstStore
        // 	.getProductById(2)
        // 	.then((product) => {
        // 		console.log(product);
        // 	})
        // 	.catch((error) => {
        // 		console.log(error.message);
        // 	});
        
        // myFirstStore
        // 	.getProductById(3)
        // 	.then((product) => {
        // 		console.log(product);
        // 	})
        // 	.catch((error) => {
        // 		console.log(error.message);
        // 	});
        
        // //================= updateProduct ========================
        
        // myFirstStore
        // 	.getProductById(4)
        // 	.then((product) => {
        // 		console.log(product);
        // 	})
        // 	.catch((error) => {
        // 		console.log(error.message);
        // 	});
        // //veo producto 4
        
        // myFirstStore.updateProduct(4, { price: 1600 });
        // //cambio el precio del producto 4
        
        // setTimeout(() => {
        // 	myFirstStore
        // 		.getProductById(4)
        // 		.then((product) => {
        // 			console.log(product);
        // 		})
        // 		.catch((error) => {
        // 			console.log(error.message);
        // 		});
        // }, 1000);
        // //veo producto 4 modificado luego de 1 segundo.
        
        // //================= updateProduct ========================
        
        // borrar producto id 5
        
        // myFirstStore
        // 	.deleteProduct(3)
        // 	.then((data) => {
        // 		console.log('el resultado de la eliminacion es:', data);
        // 	})
        // 	.catch((error) => {
        // 		console.log(error.message);
        // 	})