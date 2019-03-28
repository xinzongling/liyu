/*
console.log(__dirname);//E:\liyuclass\010-Nodejs\global-bianliang

console.log(__filename);//E:\liyuclass\010-Nodejs\global-bianliang\001-g1.js
console.log(module);

*/


//console.log(process)
//console.log(global.process)
//console.log(process.argv);

//console.log(process.env);
//console.log(process.pid);

console.log(1);
process.nextTick(()=>{
	console.log(2)
});
console.log(3);
