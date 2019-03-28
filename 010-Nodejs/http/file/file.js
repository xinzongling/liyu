const http=require('http');
const formidable=require('formidable');
const fs=require('fs');

const path=require('path');


//上传文件时，一定要在表单中指定enctype="multipart/form-data"
const server=http.createServer((req,res)=>{
	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";//存放图片的地址
		form.keepExtensions=true;
		form.parse(req,function(err,fields,files){
			if(err){
				console.log(err);
			}else{
				console.log('files...',files.xinzongling.path);
				let oldPath=__dirname+'\\'+files.xinzongling.path;
				console.log(oldPath);
				let extName=path.extname(oldPath);
				let newPath=Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,0)+extName;
				fs.rename(oldPath, newPath, (err,data)=>{
					if(err){
						res.setHeader('Content-Type','text/html;charset=UTF-8');
						res.end('err');
					}else{
						res.setHeader('Content-Type','text/html;charset=UTF-8');
						res.end('ok');
					}
				})
			}
			/*
			console.log({fields:fields,files:files});
			res.setHeader('Content-Type','text/html;charset=UTF-8');
			res.end('kuazhu');
			*/
		});
	};
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
});