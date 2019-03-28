;(function($){
	function Myplug($elem,options1){
		this.$elem=$elem;
		this.options1=options1;
		this.init();
	};
	Myplug.prototype={
		constructor:Myplug,
		init:function(){
			this.$elem.showHide(this.options1);
			this.$elem.move(this.options1);
		},
		myShow:function(){
			this.$elem.showHide('show');
		},
		/*myHide:function(){
			this.$elem.showHide('hide');
		},*/
		setCss:function(options2){
			var obj={};
			for (key in options2){
				obj[key]=options2[key];
			}
			this.$elem.css(obj);
		},
		toggle:function(){
			if(parseFloat(this.$elem.css('left'))==0){
				console.log('css')
				this.$elem.move('to',window.innerWidth-this.$elem.width(),
				window.innerHeight-this.$elem.height());
			}else{
				this.$elem.move('to',0,0);
			}
			
		}
	};
	Myplug.DEFAULTS = {
		js:true,
		mode:'fade',
		Js:false
	};
	$.fn.extend({
		myplug:function(options1,options2){
			return this.each(function(){
				var $this = $(this);
				var myplug = $this.data('myplug');//mode,myplug,注意变量不能冲突
				if(!myplug){//单例模式
					options1=$.extend(Myplug.DEFAULTS,options1);
					myplug=new Myplug($this,options1);
					$this.data('myplug',myplug);
				}
				if(typeof myplug[options1] == 'function'){
					myplug[options1](options2);
				}
			});
		}
	})
})(jQuery)
