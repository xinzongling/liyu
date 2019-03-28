
const fs=require('fs');
/*
//打开文件
const fd=fs.openSync('./001.txt','r');//同步 //flag:a,w,r,

const buf=Buffer.alloc(100);
console.log(buf);

//读取文件
//offset值的是从buf哪个地方开始放入数据
fs.readSync(fd, buf, 0, 100, 0);

console.log(buf);

//关闭文件
fs.closeSync(fd);
*/

fn=fs.readFileSync('./001.txt',{flag:'r'});
console.log(fn);
console.log('do something...');






