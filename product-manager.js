class ProductManager {

    constructor() {
        this.products = []
    }
    
    getProducts() {
        // Mostrar por consola el array completo this.products y Devolver el array
        console.log(this.products);
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        // Verificar que ningun argumento venga vacio
        if(title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined){
            return console.log('Todos los campos son obligatorios');
        }

        // Aqui estoy buscando si algun objeto dentro de this.products contiene el code: this.products.find(el => el.code == code)
        // Si hay algun objeto es por que los code coinciden, despues se verifica si es truthy o false
        // Se devulve en consola en caso de ser truthy un mensaje de error
        const codeCheck = this.products.find(el => el.code == code)
        if (codeCheck) return console.log(`El codigo: ${code} ya existe, cmabairlo por uno no existente`);

        this.products.push({
            // id: Estoy primero verificando si el array de this.products tiene almenos un elemento
            // Despues busco el id del ultimo objeto dentro del array y le sumo 1: this.products[this.products.length - 1].id + 1
            // Si no hay elementos se ejecuta el else y le da el valor de 1
            id: this.products.length !== 0 ? this.products[this.products.length - 1].id + 1 : 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }

    getProductById(id){
        // Verificar si el id que se recive como parametro existe dentro de algun objeto dentro del array this.products
        // De existir devuleve el objeto y lo muestra tambien por consola
        // Si no, manda un mensaje de error
        const idCheck = this.products.find(el => el.id == id)
        if (idCheck) {
            console.log(`This is the object with id ${id}`, idCheck)
            return idCheck
        } else {
            console.log(`El id: ${id} no existe`);
        }
    }
}

//1: Se creará una instancia de la clase “ProductManager”
const allProducts = new ProductManager();

//2: Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(allProducts.products);

//3: Se llamará al método “addProduct”, 
//4: El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
allProducts.addProduct('Guitarra', 'Guitarra Tayor en madera de Roble', 300, 'img', 1234, 5)

//5: Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(allProducts.products);

//6: Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
allProducts.addProduct('Guitarra', 'Guitarra Tayor en madera de Roble', 300, 'img', 1234, 3)

//7: Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
allProducts.getProductById(7)