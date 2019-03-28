
//const buf=new Buffer('hello');//一个英文占一个字节，2位16进制

//const buf=new Buffer('123');

//const buf=new Buffer(12);

//const buf=new Buffer('学习编程');//一个汉字占三个字节，2位16进制

//const buf=Buffer.from('hello');


/*
const buf=Buffer.alloc(6);
//console.log(buf.length);
buf[0]='10';
buf[1]='60';
*/

const buf=Buffer.from('hello');

console.log(buf.toString());