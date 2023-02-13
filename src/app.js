import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const SERVER_PORT = 8080
app.listen(8080, () => {
    console.log(`servidor escuchado por el puerto: ` + SERVER_PORT)
    console.log()

})
