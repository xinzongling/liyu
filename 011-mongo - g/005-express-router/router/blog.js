var express = require('express')
var blogRouter = express.Router()



blogRouter.get('/', (req, res) => res.send('get blog data success...'))

blogRouter.post('/', (req, res) => res.send('post blog data success...'))

blogRouter.put('/', (req, res) => res.send('put blog data success...'))

blogRouter.delete('/', (req, res) => res.send('delete blog data success...'))





module.exports = blogRouter;