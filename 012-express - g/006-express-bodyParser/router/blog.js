var express = require('express')
var blogRouter = express.Router()

const bodyParser = require('body-parser');


//解析json
blogRouter.use(bodyParser.json());
//解析urlencoded内容
blogRouter.use(bodyParser.urlencoded({ extended: false }));




blogRouter.get('/', (req, res) => res.send('get blog data success...'))

blogRouter.post('/', (req, res) => {

/*
	let body='';
	req.on('data',(chunk)=>{
		body+=chunk;
	})
	req.on('end',()=>{
		console.log('body::',body);
	})

	res.send('post blog data success...');
*/
	console.log('req.body',req.body)

});



blogRouter.put('/', (req, res) => res.send('put blog data success...'))

blogRouter.delete('/', (req, res) => res.send('delete blog data success...'))





module.exports = blogRouter;