import express from 'express'
import ProductRouter from './routes/product.routes.js'
import handlebars from 'express-handlebars'
import __dirname from './util.js'
import * as path from "path"
import ProductManager from './Components/ProductManager.js'


const app = express()
const SERVER_PORT = 8080
const product = new ProductManager()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine("handlebars", handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname + "/views"))

app.use(express.static(__dirname+'/public'))

app.get("/", async (req, res) =>{
    let allProducts = await product.getProducts()
    res.render("index", {
        products: allProducts
    })
})



app.use("/api/", ProductRouter)

app.listen(8080, () => {
    console.log(`servidor escuchado por el puerto: ` + SERVER_PORT)

})
 