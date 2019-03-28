const { Readable }=require('stream');
/*
const reader=new Readable();

reader.on('data',function(chunk){
	console.log(chunk);
})
*/
class myReadable extends Readable{
	constructor(){
		super();
		this.index=0;
	}
	_read(){
		this.index++;
		if(this.index>5){
			this.push(null);
		}else{
			var str=this.index+'';
			this.push(str);
		};
	}
};

const readable=new myReadable();
var body='';
readable.on('data',function(chunk){
	//console.log(chunk);
	body+=chunk;
	//console.log(chunk.toString());
	console.log(chunk);
});

readable.on('end',()=>{
	console.log('end....');
});