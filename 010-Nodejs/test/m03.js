const EventEmitter = require('events');

class myEventEmitter extends EventEmitter{

};

const emitter=new myEventEmitter();

emitter.on('test',function(name,age){
	console.log('test...');
	console.log(name,age);
});

emitter.emit('test','tom',18);
