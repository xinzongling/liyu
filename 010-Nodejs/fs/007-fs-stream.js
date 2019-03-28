const fs=require('fs');
const ws=fs.createWriteStream('./w.txt');
const rs=fs.createReadStream('./r.txt');
//console.log(ws.write+'');
/*
ws.on('open',()=>{
	console.log('ws open...');
});
ws.on('close',()=>{
	console.log('ws close...');
});
ws.on('finish',()=>{
	console.log('ws finish..');
});
ws.write('hello');
ws.write('taobao');
ws.end();
rs.on('data',(chunk)=>{
	console.log(chunk);
});
rs.on('open',()=>{
	console.log('rs open...')
});
rs.on('close',()=>{
	console.log('rs close...')
});
rs.on('end',()=>{
	console.log('rs end...')
});*/
rs.pipe(ws);
