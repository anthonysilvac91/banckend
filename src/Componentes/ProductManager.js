import {promises as fs} from 'fs'


const fileName = "./src/models/productos.json";



class ProductManager {
    constructor(){
        this.path = fileName
        // this.products = []
    }
   
      static getId = () =>{
        this.id = Math.random().toString(30).substring(2)
        return this.id
      }

    readProduct = async () => {
        let catalogoProductos  = await fs.readFile(fileName, "utf-8");
        return JSON.parse(catalogoProductos)
    }

    writeProduct = async (product) =>{
        await fs.writeFile(fileName, JSON.stringify(product))
    }

    addProduct = async (product) => {
        let productLog = await this.readProduct()
        product.id = ProductManager.getId()
        let productUpdate = [...productLog, product]
        await this.writeProduct(productUpdate)
        return "Producto Agregado" 
    }

    getProducts = async () => {
        return await this.readProduct()
    }

    getProductById = async (id) =>{
        let catalogoId = await this.readProduct()
        let productoExiste = catalogoId.find(prod => prod.id === id)
        if(!productoExiste) return "Producto no existe"
        return productoExiste
    }

    deleteProductById = async (id) =>{
        let catalogoId = await this.readProduct()
        let productoExiste = catalogoId.find(prod => prod.id === id)
        if (productoExiste){
            let productoExiste = catalogoId.filter(products => products.id != id)
            await this.writeProduct(productoExiste)
            return "Producto Eliminado"
        }else{
            return "El producto que desea eliminar no existe"
        }   
    }

    updateProductById = async (id, product) =>{
        let catalogoId = await this.readProduct()
        let productoExiste = catalogoId.find(prod => prod.id === id)
        if(!productoExiste) return "Producto no existe"
        await this.deleteProductById(id)
        let productLog = await this.readProduct() 
        let putProduct = [{...product, id : id}, ...productLog]
        await this.writeProduct(putProduct)
        return `el producto con el ID "${id}" ha sido actualizado`
    }
}



export default ProductManager 


