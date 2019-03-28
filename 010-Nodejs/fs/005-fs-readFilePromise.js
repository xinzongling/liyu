const fs=require('fs');
const util = require('util');
/*
fs.readFile('./001.txt',{flag:'r'},function(err,data){
	if(err){
		console.log('readFile err...');
	}else{
		console.log('readFile success...');
		console.log(data);
	};
});*/
const readFile = util.promisify(fs.readFile);
readFile('./001.txt',{flag:'r'})
.then((data)=>{
	console.log(data);
});
console.log('do something...');