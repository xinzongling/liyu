const fs=require('fs');
let filePath='./data.json';

const util=require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);//promise对象

async function add(name){
	//获取原数据
	let data=await readFile(filePath);//执行完为数组，返回的是Promise
	let arr=JSON.parse(data);		
	arr.push({//2添加数据
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,0),
		name:name
	});
	let strArr=JSON.stringify(arr);
	//3保存
	await writeFile(filePath,strArr);
	return arr
};

add('perter')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})

async function get(id){
	//获取原数据
	let data=await readFile(filePath);//执行完为数组，返回的是Promise
	let arr=JSON.parse(data);		
	//2查找数据
	let result=arr.find(n=>{
		n[id]==id;
		return n;
	});
	return result
};
/*
get("15533109396240590")
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/

async function update(id,name){
	//获取原数据
	let data=await readFile(filePath);//执行完为数组，返回的是Promise
	let arr=JSON.parse(data);		
	//2更新数据
	let result=arr.find(n=>{
		n[id]==id;
		return n;
	});
	if(result){
		result.name=name;//相当于直接修改了原数组
		let strArr=JSON.stringify(arr);
		//3保存
		await writeFile(filePath,strArr);
		return arr;		
	}else{
		return result;
	}
};

/*
update("15533109396240590",'mike1112')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/

async function remove(id){
	//获取原数据
	let data=await readFile(filePath);//执行完为数组，返回的是Promise
	let arr=JSON.parse(data);	
	//2删除数据
	let result=arr.filter(n=>{
		return n['id']!==id;
	});
	let strArr=JSON.stringify(result);
	//3保存
	await writeFile(filePath,strArr);
	return result;
};
/*
remove("15533089121050596")
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/