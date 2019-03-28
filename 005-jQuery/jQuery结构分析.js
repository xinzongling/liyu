
;(function(w){
	var kQuery=function(selector){
		return new kQuery.fn.init(selector);
	};
	kQuery.fn=kQuery.prototype={
		constructor:kQuery,
		init:function(selector){
			if(!selector){   //布尔值
				return this
			}else if(kQuery.isFunction(selector)){ 	//函数
				window.addEventListener('DOMContentLoded',selector);
				this[0]=document;
				this.length=1;
				return this;
			}else if(kQuery.isString(selector)){   //字符串
				if(kQuery.isHTML(selector)){      //代码
					var temp=document.createElement('div');
					temp.innerHTML=selector;
					for(var i=0;i<temp.children.length;i++){
						this[i]=temp.children[i]
					};
					this.length=temp.children.length;
				}else{		//选择器
					var doms=document.querySelectorAll(selector);
					for(var i=0;i<doms.length;i++){
						this[i]=doms[i];
					}
					this.length=doms.length;
				}
			}else if(kQuery.isArr(selector)){   //数组
				for(var i=0;i<selector.length;i++){
					this[i]=selector[i];
				};
				this.length=selector.length;
			}else{   //对象
				this[0]=selector;
				this.length=1;
			}
		},
		get:function(num){
			if(num){
				if(kQuery.isNum(num)){
					if(num>=0){
						return this[num]
					}else{
						return this[this.length+num]
					}
				}
			}else{
				for (var i=0;i<this.length;i++){
					arr.push(this[i]);
				};
				return arr;
			}
		}
	};
	kQuery.fn.extend=kQuery.extend=function(options){
		for(key in options){
			this[key]=options[key];
		}
	};
	kQuery.extend({
		isFunction:function(selector){
			return typeof selector=='function'
		},
		isString:function(selector){
			return typeof selector=='string';
		},
		isHTML:function(selector){
			return /<[^<>]+>/g.test(selector);
		},
		isArr:function(selector){
			return typeof selector=='object'&&length in selector;
		},
		isNum:function(num){
			return typeof num=='number';
		}
	})
	kQuery.fn.init.prototype=kQuery.fn;
	w.kQuery=w.$=kQuery;
})(window)