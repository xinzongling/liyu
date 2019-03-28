//const stream =require('stream');
//console.log(stream);
const { Writable }=require('stream');
//console.log(Writable);
//console.log(stream)
class myWritable extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk, encoding, callback);
		callback();
	}
};

const ws=new myWritable();

ws.on('finish',function(){
	console.log('finish...')
});

ws.write('hello',function(){
	console.log('hello...');
});

ws.end();
//process.stdout.write('happy'); 
