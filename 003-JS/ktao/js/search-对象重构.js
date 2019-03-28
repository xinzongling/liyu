;(function ($){
	function Search($elem,options){
		this.$elem=$elem;
		this.options=options;
		this.$searchForm=this.$elem.find('.search-form');	
		this.$searchInput=this.$elem.find('.search-input');	
		this.$searchLayer=this.$elem.find('.search-layer');
		this.$searchBtn=this.$elem.find('.search-btn');
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
			.on('input',this.getData.bind(this))
			.on('focus',this.showLayer.bind(this))
			.on('click',function(ev){
				ev.stopPropagation();
			});
			$(document).on('click',this.hideLayer.bind(this));		
		},
		getData:function(){
				$.ajax({
					url:this.options.url+this.getInputVal(),
					dataType:'jsonp',
					jsonp:'callback'
				})
				.done(function(data){
					this.$elem.trigger('getData',[data]);
				}.bind(this))
				.fail(function(err){
					this.$elem.trigger('getNoData');
				})
				.always(function(){
					console.log('always...')
				});
		},
		showLayer:function(){
			if($.trim(this.$searchLayer.html()) == '') return; 
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