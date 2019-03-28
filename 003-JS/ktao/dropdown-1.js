
;(function($){
	function DropDown($elem,options){
		this.$elem=$elem;
		this.options=options;
		this.activeClass=this.$elem.data('active')+'-active';
		this.$layer=this.$elem.find('.dropdown-layer');
		//初始化显示隐藏模块
		this.$layer.showHide(this.options);

		//绑定事件
		this.$elem.hover(this.show.bind(this),this.hide.bind(this));
	};
	DropDown.prototype={
		constructor:DropDown,
		show:function(){
			//显示下拉层
			this.$layer.showHide('show');
			this.$elem.addClass(this.activeClass);
		},
		hide:function(){
			//隐藏下拉层
			this.$layer.showHide('hide');
			this.$elem.removeClass(this.activeClass);
		}
	};
	DropDown.DEFAULTS={
		css3:false,
		js:true,
		mode:'slideUpDown'
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
