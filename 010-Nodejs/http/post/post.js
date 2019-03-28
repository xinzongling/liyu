const http=require('http');
const fs=require('fs');
const url=require('url');

const querystring=require('querystring');

const server=http.createServer((req,res)=>{

	let filePath='.'+req.url;//对于post请求，需要通过监听事件来获取数据
/*
	console.log(filePath)
	console.log(req.method)

	let str=url.parse(filePath,true).query;
	console.log(str);
*/
	
	let body='';
	req.on('data',(chunk)=>{//只接受一个参数chunk
		body+=chunk;
		console.log(chunk);
	});
	req.on('end',()=>{
		console.log(body);//name=tom&age=12
		let str=querystring.parse(body);
		console.log(str);
	})

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
});