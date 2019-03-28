

const m5=require('./m1.js')//文件模块一定要加上路径，
//否则系统会认为是核心模块或自定义模块，容易出错
console.log(m5);
//require执行完成后所返回的值即为导出的对象
console.log(m5.str);
console.log(m5.obj);
console.log(m5.fn);
