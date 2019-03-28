const http=require('http');

const server=http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/plain;charset=UTF-8');
	//console.log(req.url);
	//当启动服务后，就实现了客户端和服务器端的双向流，
	//从客户端接受数据为读，服务器发送为写。
	res.write('hello');
	res.write('kuazhu');
	res.end('世界');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
});