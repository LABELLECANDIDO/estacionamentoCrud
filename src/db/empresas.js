const { readFileSync } = require("fs")

let database = {}

const lerDatabase = () => {
    database = JSON.parse(readFileSync("empresas.json"))
}

lerDatabase()

module.exports = {
    listar: () => {
        return Object.values(database)
    },

    obterPorID: (id) => {
        return database[id]
        // return Object.values(database).find(empresa => empresa.cnpj === id)
    }
}
