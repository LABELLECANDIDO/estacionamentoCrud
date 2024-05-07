const empresas = require("../db/empresas")

module.exports = {
    cadastrar: (req, res) => {
        return res.json({"body": req.body,
            "param": req.query
        })
    },
    
    listar: (req, res) => {
        return res.json(empresas.listar())
    },

    obterPorID: (req, res) => {
        return res.json(empresas.obterPorID(req.params.id))
    }
}