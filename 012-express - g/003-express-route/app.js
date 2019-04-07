const express = require('express')
const app = express()



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
*/



app.all('/', (req, res,next) => {
	let obj={
		name:'tom',
		age:18
	}
	//res.send(obj);
	//res.end(obj);
});

console.log('continue....')
app.get('/', (req, res) => res.send('get data success...'))


app.post('/', (req, res) => res.send('post data success...'))


app.put('/', (req, res) => res.send('put data success...'))


app.delete('/', (req, res) => res.send('delete data success...'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))