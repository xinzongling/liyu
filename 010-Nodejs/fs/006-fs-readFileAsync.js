const fs=require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function callReadFile(){
	return await readFile('./001.txt',{flag:'r'});
}
callReadFile()
.then(data=>{
	console.log(data);
});
console.log('do something...');