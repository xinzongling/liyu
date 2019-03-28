const http=require('http');
const fs=require('fs');
const url=require('url');


const querystring=require('querystring');

const server=http.createServer((req,res)=>{
	//res.setHeader('Content-Type','text/html;charset=UTF-8');
	//console.log(req.url);
	let filePath='.'+req.url;
	//console.log(filePath)
	//console.log(req.method)
	//console.log(url.parse(filePath));
	/*
	let str=url.parse(filePath).query;
	let newStr=Str=querystring.parse(str);
	console.log(newStr.name);
	*/

	let str=url.parse(filePath,true).query;
	console.log(str);

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
});