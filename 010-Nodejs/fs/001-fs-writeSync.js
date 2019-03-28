const fs=require('fs');

//打开文件
const fd=fs.openSync('./001.txt','a');//同步 //flag:a,w,r,
console.log(typeof fd)

//写入数据
fs.writeSync(fd,'program', 0, 100, 0);

//关闭文件
fs.closeSync(fd);


/*
fs.writeFileSync('./001.txt','hello',{flag:'a'});
console.log('do something...');
*/