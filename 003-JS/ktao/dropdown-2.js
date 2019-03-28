
;(function($){
	function DropDown($elem,options){
		this.$elem=$elem;
		this.options=options;
		this.activeClass=this.$elem.data('active')+'-active';
		this.$layer=this.$elem.find('.dropdown-layer');
		this._init();		
	};
	DropDown.prototype={
		constructor:DropDown,
		_init:function(){
			//初始化显示隐藏模块
			this.$layer.showHide(this.options);

			this.$layer.on('show shown hide hidden',function(ev){
				this.$elem.trigger('dropdown-'+ev.type);
			}.bind(this));  //要注意函数中的this问题

			if(this.options.eventName=='click'){
				this.$elem.on('click',function(ev){
					ev.stopPropagation();
					this.show();
				}.bind(this));
				$(document).on('click',$.proxy(this.hide,this));
			}else{
				this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
			}
			//绑定事件
			//this.$elem.hover(this.show.bind(this),this.hide.bind(this));
		},
		show:function(){
			//显示下拉层
			//避免用户快速划过来过度触发事件
			if(this.options.delay){
					this.timer=setTimeout(function(){
					this.$layer.showHide('show');
					this.$elem.addClass(this.activeClass);
				}.bind(this),this.options.delay)
			}			
		},
		hide:function(){
			//隐藏下拉层
			if(this.options.delay){
				clearTimeout(this.timer);
			}
			this.$layer.showHide('hide');
			this.$elem.removeClass(this.activeClass);
		}
	};
	DropDown.DEFAULTS={
		css3:false,
		js:true,
		mode:'slideUpDown',
		delay:500,
		eventName:'hover'
	};
	$.fn.extend({
		dropdown:function(options){
			return this.each(function(){
				var options=$.extend(DropDown.DEFAULTS,options);
				new DropDown($(this),options);
			});
		}
	});
})(jQuery)
