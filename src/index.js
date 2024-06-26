const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes")

const app = express()

app.use(bodyParser.json())

routes(app)

app.listen(8080, () => {
    console.log("Servidor iniciado")
})