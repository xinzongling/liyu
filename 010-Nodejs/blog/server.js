const http=require('http');

const fs=require('fs');
const path=require('path');
const mime=require('./mime.json');

const server=http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	//约定1.如果请求是根路径或 /static/index.html。或 /static/ixx
	//返回index页面

	//2./static/detail.html。/static/detail.html对应页面

	let pathName=req.url;
	if(pathName=='/'||pathName=='/static/index.html'){
		pathName='./static/index.html';
	}else{
		pathName='./static/'+pathName;
	}
	console.log(pathName);

	let extName=path.extname(pathName);
	fs.readFile(pathName,(err,data)=>{
		if(err){
			res.setHeader('Content-Type','text/html;charset=UTF-8');
			res.statusCode=500;
			res.end('<h1>请求出错啦</h1>');
		}else{
			res.setHeader('Content-Type',mime[extName]+';charset=UTF-8');
			res.statusCode=200;
			res.end(data);
		}
	})


});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
});