import {Router} from "express"
import ProductManager from '../Components/ProductManager.js'

const ProductRouter = Router()
const product = new ProductManager()

ProductRouter.post("/products", async (req, res) =>{
    let newProduct = req.body
    res.send(await product.addProduct(newProduct))
})

ProductRouter.get("/products", async (req, res) =>{
    res.send(await product.getProducts())
})

ProductRouter.get("/products/:id", async (req, res) =>{
    let id = req.params.id
    res.send(await product.getProductById(id))
})

ProductRouter.delete("/products/:id", async (req, res) =>{
    let id = req.params.id
    res.send(await product.deleteProductById(id))
})

ProductRouter.put("/products/:id", async (req, res) =>{
    let id = req.params.id
    let productUpdate = req.body
    res.send(await product.updateProductById(id, productUpdate))
})

export default ProductRouter