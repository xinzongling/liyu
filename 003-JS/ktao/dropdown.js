/*

$(function(){
	$('.dropdown').hover(function(){
		//添加active class
		var $this=$(this);
		var activeClass=$this.data('active')+'-active';
		$this.addClass(activeClass);
	},function(){
		//删除active class
		var $this=$(this);
		var activeClass=$this.data('active')+'-active';
		$this.removeClass(activeClass);
	})
})
*/


;(function($){
	$.fn.extend({
		dropdown:function(){
			return this.each(function(){
				var $this=$(this);	
				var activeClass=$this.data('active')+'-active';
				var $layer=$this.find('.dropdown-layer');
				//初始化显示隐藏模块
				$layer.showHide({
					css3:true,
					js:false,
					mode:'slideUpDown'
				});
				$this.hover(function(){
					//显示下拉层
					$layer.showHide('show');
					$this.addClass(activeClass);
				},function(){
					//隐藏下拉层
					$layer.showHide('hide');
					$this.removeClass(activeClass);
				})
			});
		}
	})
})(jQuery)
