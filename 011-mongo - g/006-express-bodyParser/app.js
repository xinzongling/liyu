const express = require('express')
const app = express()

const url=require('url'); 
const querystring=require('querystring'); 

const userRouter=require('./router/user.js');


const blogRouter=require('./router/blog.js');

app.use('/static',express.static('static'));




app.use('/user',userRouter);

app.use('/blog',blogRouter);


app.listen(3000, () => console.log('Example app listening on port 3000!'))