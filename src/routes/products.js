const express = require('express')
const routes = express.Router()

const multer = require('../app/middlewares/multer')

const ProductController = require('../app/controllers/ProductController')
const SearchController = require('../app/controllers/SearchController')

// SEARCH
routes.get('/search', SearchController.index)

// PRODUCTS
routes.get('/create', ProductController.create)
routes.get('/:id', ProductController.show)
routes.get('/products/edit/:id', ProductController.edit)

routes.post('/', multer.array("photos", 6), ProductController.post)
routes.put('/', multer.array("photos", 6), ProductController.put)
routes.delete('/',ProductController.delete)


module.exports = routes