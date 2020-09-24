const Product = require('../models/Product')
const File = require('../models/File')
const {formatPrice} = require('../lib/utils')

module.exports = {
    async index(req, res) {

        let results = await Product.all()
        const products = results.rows

        if(!products) return res.send("Produto Não Encontrado!")

        
       
    }
}
