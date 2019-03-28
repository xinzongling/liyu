const fs=require('fs');

/*
//打开文件
fs.open('./001.txt','w',(err,fd)=>{
	if(err){
		console.log('open error...',err);
	}else{
		//写入数据
		fs.write(fd,'kuazhu',(err,data)=>{
			console.log('fd...',fd)
			if(err){
				console.log('write error...',err)
			}else{
				console.log('write success...');
				console.log(data);
			}
		});
		fs.close(fd,(err,data)=>{
			if(err){
				console.log('close error...',err)
			}else{
				console.log('close success...');
			}
		});
	}
});*/
fs.writeFile('./001.txt','kauzhu',{flag:'a'},function(err){
	if(err){
		console.log('writeFile err...');
	}else{
		console.log('writeFile success...');
	}
});
console.log('do something...');