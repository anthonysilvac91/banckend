import express from 'express'
import ProductRouter from './routes/product.routes.js'


const app = express()
const SERVER_PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/", ProductRouter)

app.listen(8080, () => {
    console.log(`servidor escuchado por el puerto: ` + SERVER_PORT)

})
 