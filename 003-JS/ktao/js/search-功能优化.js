;(function ($){
	//数据的缓存
	var cache={
		data:{},
		count:0,
		addData:function(key,val){
			this.data[key]=val;
			this.count++;
		},
		readData:function(key){
			return this.data[key]
		}
	};
	function Search($elem,options){
		this.$elem=$elem;
		this.options=options;
		this.$searchForm=this.$elem.find('.search-form');	
		this.$searchInput=this.$elem.find('.search-input');	
		this.$searchLayer=this.$elem.find('.search-layer');
		this.$searchBtn=this.$elem.find('.search-btn');
		this.isLoaded=false;
		this._init();
		if(this.options.autocomplete){
			this.auto();
		}
	};
	Search.prototype={
		constructor:Search,
		_init:function(){ //submit事件的绑定
			this.$searchBtn.on('click',this.submit.bind(this));
		},
		submit:function(){ //提交
			if(this.getInputVal()==''){
				return false;
			}
			this.$searchForm.trigger('submit');
		},
		auto:function(){
			this.$searchLayer.showHide(this.options);
			this.$searchInput
			.on('input',function(){
				if(this.options.getDataInterval){
					clearTimeout(this.timer);
					this.timer=setTimeout(function(){
						this.getData();
					}.bind(this),this.options.getDataInterval)
				}else{
					this.getData();
				}
			}.bind(this))
			.on('focus',this.showLayer.bind(this))
			.on('click',function(ev){
				ev.stopPropagation();
			});
			$(document).on('click',this.hideLayer.bind(this));		
		},
		getData:function(){				
				var inputVal=this.getInputVal();
				if(inputVal==''){
					return false;
				};
				console.log('get data...');
				console.log(cache);
				console.log(cache.readData(inputVal));
                
				if(cache.readData(inputVal)){
					this.$elem.trigger('getData',[cache.readData(inputVal)]);
					return;
				};
				console.log('will get data....');
				if(this.jqXHR){//由于定时器的延时,所以为了拿到最新的数据，需要再次判断
					this.jqXHR.abort();
				};
				this.jqXHR=$.ajax({
					url:this.options.url+this.getInputVal(),
					dataType:'jsonp',
					jsonp:'callback'
				})
				.done(function(data){
					cache.addData(inputVal,data);
					this.$elem.trigger('getData',[data]);
				}.bind(this))
				.fail(function(err){
					this.$elem.trigger('getNoData');
				})
				.always(function(){
					console.log('always...');
					this.jqXHR=null;
				}.bind(this));
		},
		showLayer:function(){
			if(!this.isLoaded) return; 
			this.$searchLayer.showHide('show');
		},
		hideLayer:function(){
			this.$searchLayer.showHide('hide');
		},
		getInputVal:function(){
			return $.trim(this.$searchInput.val()); //trim会去掉字符串两头的空格
		},
		appendLayer:function(html){
			this.$searchLayer.html(html);
			this.isLoaded=!!html;
		},
		setInputVal:function(val){
			this.$searchInput.val(removeHTMLTag(val));
			function removeHTMLTag(str){
				return str.replace(/<[^<|>]+>/g,'');
			};
		}
	};
	Search.DEFAULTS={
		autocomplete:false,
		css3:false,
		js:false,
		mode:'slideUpDown',
		getDataInterval:500,
		url:'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1550996358591_924&k=1&area=c2c&bucketid=6&q='
	};
	$.fn.extend({
		search:function(options,val){
			return this.each(function(){
				var $this=$(this);
				var search=$this.data('search');
				if(!search){
					options=$.extend(Search.DEFAULTS,options);
					search=new Search($(this),options);
					$this.data('search',search);
				};
				if(typeof search[options] == 'function'){
					search[options](val);
				};
			});
		}
	})
})(jQuery)