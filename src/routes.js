const empresas = require("./controllers/empresas")

module.exports = (app) => {
    app.post('/empresas', empresas.cadastrar)
    app.get('/empresas', empresas.listar)
    app.get('/empresas/:id', empresas.obterPorID)
}