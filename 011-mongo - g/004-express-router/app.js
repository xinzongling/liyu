const express = require('express')
const app = express()

const url=require('url'); 
const querystring=require('querystring'); 

app.use('/static',express.static('static'));

/*
app.all('/', (req, res) => {
	res.send('all data success...');
});
*/

/*
app.all('/', (req, res,next) => {
	console.log('all ...');
	next();
},(req, res,next) => {
	console.log('all 123 ...');
	next();
});

app.all('/', (req, res,next) => {
	let obj={
		name:'tom',
		age:18
	}
	//res.send(obj);
	//res.end(obj);
});

console.log('continue....')*/


/*
app.all('/', (req, res,next) => {
	let obj={
		name:'tom',
		age:18
	}
	
	console.log(req.method);
	console.log(url.parse(req.url,true).query);
	let body='';

	req.on('data',(chunk)=>{
		body+=chunk;
	});
	req.on('end',()=>{
		console.log('body...',querystring.parse(body));
	});



	res.send(obj);
	res.end(obj);
});
*/



app.all('/user/:name/id/:userId', (req, res,next) => {
	let obj={
		name:'tom',
		age:18
	}
	console.log(req.params)
	res.send(obj);
});








app.get('/', (req, res) => res.send('get data success...'))


app.post('/', (req, res) => res.send('post data success...'))


app.put('/', (req, res) => res.send('put data success...'))


app.delete('/', (req, res) => res.send('delete data success...'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))