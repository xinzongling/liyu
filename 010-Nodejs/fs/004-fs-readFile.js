const fs=require('fs');

/*
//打开文件
fs.open('./001.txt','r',(err,fd)=>{
	if(err){
		console.log('open error...',err);
	}else{
		//读数据
		var buf=Buffer.alloc(100);
		//fd, buffer, offset, length, position, callback
		fs.read(fd,buf,0,100,0,(err)=>{
			console.log('fd...',fd);
			if(err){
				console.log('read error...',err)
			}else{
				console.log('read success...');
				console.log(buf);
			}
		});
		fs.close(fd,(err)=>{
			if(err){
				console.log('close error...',err)
			}else{
				console.log('close success...');
			}
		});
	}
});
*/
fs.readFile('./001.txt',{flag:'r'},function(err,data){
	if(err){
		console.log('readFile err...');
	}else{
		console.log('readFile success...');
		console.log(data);
	}
});
console.log('do something...');