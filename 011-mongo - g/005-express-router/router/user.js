var express = require('express')
var userRouter = express.Router()



userRouter.get('/name', (req, res) => res.send('get user data success...'))

userRouter.post('/', (req, res) => res.send('post user data success...'))

userRouter.put('/', (req, res) => res.send('put user data success...'))

userRouter.delete('/', (req, res) => res.send('delete user data success...'))





module.exports = userRouter;