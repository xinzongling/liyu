const fs=require('fs');
let filePath='./data.json';
let add=(name,callback)=>{ //增加数据
	//1获取原有数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback&&callback(err);
		}else{
			data=JSON.parse(data);//JSON.parse把一个buffer转换为非二进制数组
			data.push({//2添加数据
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,0),
				name:name
			});
			//3保存并关闭文件
			let newArr=JSON.stringify(data)//newArr为字符串
			fs.writeFile(filePath,newArr,(err)=>{
				if(err){
					callback&&callback(err);
				}else{
					callback&&callback(null,newArr);
				};
			});
		};
	});	
}
add('tom',(err,data)=>{
	console.log(data);
});

let get=(id,callback)=>{//查找数据
	//1获取原有数据
 	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback&&callback(err);
		}else{
			data=JSON.parse(data);//JSON.parse把一个buffer转换为非二进制数组
			//2查找数据
			let result=data.find(n=>{
				n[id]==id;
				return n;
			});
			callback&&callback(err,result);
		};
	});	
};
get("15532686126538410",(err,data)=>{//通过回调拿到值
	console.log(data);
});

let update=(id,name,callback)=>{//更新数据
	//1获取原有数据
 	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback&&callback(err);
		}else{
			data=JSON.parse(data);//JSON.parse把一个buffer转换为非二进制数组
			//2修改数据
			let result=data.find(n=>{
				n[id]==id;
				return n;
			});
			result.name=name;
			callback&&callback(err,result);			
			//3保存并关闭文件
			let newArr=JSON.stringify(data)//newArr为字符串
			fs.writeFile(filePath,newArr,(err)=>{
				if(err){
					callback&&callback(err);
				};
			});
		};
	});	
}
update("15532686184504175",'mike',(err,data)=>{
	console.log(data);
});

let remove=(id,callback)=>{//删除数据
	//1获取原有数据
 	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback&&callback(err);
		}else{
			data=JSON.parse(data);//JSON.parse把一个buffer转换为非二进制数组
			//2删除数据
			let result=data.filter(n=>{
				return n.id!==id;
			});
			console.log(result)
			callback&&callback(err,result);				
			//3保存并关闭文件
			let newArr=JSON.stringify(result)//newArr为字符串
			fs.writeFile(filePath,newArr,(err)=>{
				if(err){
					callback&&callback(err);
				};
			});
		};
	});	
};
remove("15532686126538410",(err,data)=>{
	console.log(data);
});