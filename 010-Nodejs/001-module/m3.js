
//用绝对路径的话系统会直接加载路径指定的文件
//const m5=require('e:/liyuclass/010-Nodejs/001-module/m1.js')//文件模块一定要加上路径，
//const m5=require('./m1')//文件模块一定要加上路径，
//const m5=require('./m4') .js>.json
const m5=require('./m40') //出错




//否则系统会认为是核心模块或自定义模块，容易出错
console.log(m5);
//require执行完成后所返回的值即为导出的对象
console.log(m5.str);
console.log(m5.obj);
console.log(m5.fn);