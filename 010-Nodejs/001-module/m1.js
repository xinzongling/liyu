
const str='hello';

const fn=()=>{

};

const obj={
	name:'tom'
};
/*
console.log(exports);	//空对象
console.log(module);
console.log(module.exports); //空对象
console.log(exports==module.exports);//true

*/
/*
exports.str=str;
exports.fn=fn;
exports.obj=obj;
*/

/*
module.exports.str=str;
module.exports.fn=fn;
module.exports.obj=obj;
console.log('m1....')

*/

//exports和module.exports指向了同一个对象
//exports和module.exports都可以直接一次导出一个;
//exports不能导出对象，而module.exports可以导出对象
//所以最终导出的是module.exports，而不是exports
//一旦使用了module.exports={}，就不能再使用了exports
module.exports={ 
	str:str,
	fn:fn
};
//exports.obj=obj;
/*
exports={
	obj:obj
}
*/