
const EventEmitter = require('events');

//console.log(EventEmitter);

class myEventEmitter extends EventEmitter{

};

const emitter=new myEventEmitter();

/*
emitter.on('test',function(){
	console.log('test...')
});
*/

/*
emitter.once('test',function(){
	console.log('test...')
});
*/
/*
emitter.addListener('test',function(){
	console.log('test...')
});
*/

/*
emitter.setMaxListeners(80);
emitter.on('test',function(){
	console.log('test1...')
});
emitter.on('test',function(){
	console.log('test2...')
});
emitter.on('test',function(){
	console.log('test3...')
});
emitter.on('test',function(){
	console.log('test4...')
});
emitter.on('test',function(){
	console.log('test5...')
});
emitter.on('test',function(){
	console.log('test6...')
});
emitter.on('test',function(){
	console.log('test7...')
});
emitter.on('test',function(){
	console.log('test8...')
});
emitter.on('test',function(){
	console.log('test9...')
});
emitter.on('test',function(){
	console.log('test10...')
});

emitter.on('test',function(){
	console.log('test11...')
});

*/

//console.log(emitter.on==emitter.addListener)
//emitter.emit('test');
//emitter.emit('test');

/*
emitter.on('test',function(name,age){
	console.log('test11...');
	console.log(name,age);
});
//emitter.emit('test','tom',18);
var arr=['tom',18];
emitter.emit('test',...arr);
*/

/*
let fn1=function(){
	console.log('test11...');
};
let fn2=function(){
	console.log('test22...');
};
emitter.on('test',fn1);
emitter.on('test',fn2);
//emitter.removeListener('test',fn1);
emitter.off('test',fn1);
//console.log(emitter.off==emitter.removeListener)
emitter.emit('test');

*/

emitter.on('newListener',function(){
	console.log('newListener...');
});
emitter.on('test1',function(){
	console.log('test1...');
});
emitter.on('test2',function(){
	console.log('test2...');
});