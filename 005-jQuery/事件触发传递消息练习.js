;(function($){
	function Show($elem){
		this.$elem=$elem;
		this.sendData();//注意：先罗列属性值，再初始化
	};
	Show.prototype={
		constructor:Show,
		sendData:function(){
			$.ajax({
				url:'/data.json',
				dataType:'json'
			})
			.done(function(data){
				this.$elem.trigger('sendData',[data]);
			}.bind(this))
		}
	};
	$.fn.extend({
		show:function(val){
			new Show(this);
			return this;
		}
	});
})(jQuery)