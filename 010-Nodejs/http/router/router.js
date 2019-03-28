const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
	//res.setHeader('Content-Type','text/html;charset=UTF-8');
	//console.log(req.url);
	let filePath='.'+req.url;
	console.log(filePath)
	if(filePath=='./index.html'){
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=500;//500服务器出错。
				res.end('<h1>出错啦</h1>');
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=200;
				res.end(data);
			}
		});
	}else if(filePath=='./list.html'){
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=500;//500服务器出错。
				res.end('<h1>出错啦</h1>');
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=200;
				res.end(data);
			}
		});
	}else if(filePath=='./css/index.css'){
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=500;//500服务器出错。
				res.end('<h1>出错啦</h1>');
			}else{
				res.setHeader('Content-Type','text/css;charset=UTF-8');
				res.statusCode=200;
				res.end(data);
			}
		});
	}else if(filePath=='./js/index.js'){
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=500;//500服务器出错。
				res.end('<h1>出错啦</h1>');
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=200;
				res.end(data);
			}
		});
	}else if(filePath=='./images/1.png'){
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=500;//500服务器出错。
				res.end('<h1>出错啦</h1>');
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode=200;
				res.end(data);
			}
		});
	}else{
		res.setHeader('Content-Type','text/html;charset=UTF-8');
		res.statusCode=404;//客户端出错
		res.end('<h1>请求的页面不存在</h1>');
	}

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
});