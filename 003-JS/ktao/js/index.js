;(function($){
	var $dropdown=$('.dropdown');
	$dropdown.on('dropdown-show',function(ev){//当将要show的时候,向服务器获取数据
			var $this=$(this);
			//获取要请求的地址
			var loadUrl=$this.data('load');
			var isLoaded=$this.data('isLoaded');
			//如果没有网络延时，直接返回
			if(!loadUrl) return;
			//如果已经请求过数据，直接返回
			if(isLoaded) return;
			//如果有地址,则发送数据
			$.getJSON(loadUrl,function(data){
				var html='';
				console.log(data);
				for(var i=0;i<data.length;i++){
					html += '<li><a href="'+data[i].url+'" class="menu-item link">'+data[i].name+'</a></li>';
				};
				//模拟网络延时
				setTimeout(function(){
					$this.find('.dropdown-layer').html(html);
					$this.data('isLoaded',true);
				},500);
			})
	});
	$dropdown.dropdown({
		css3:true,
		js:false,
		mode:'slideUpDown',
		delay:300
	});
	/*搜索框*/
	var $elem=$('.search');
	$elem.search({
		autocomplete:true
	});
	$elem
	.on('getData',function(ev,data){
		var $this=$(this);
		var html =createSearchLayer(data,10);
		$this.search('appendLayer',html);
		if(html){
			$this.search('showLayer');
		}else{
			$this.search('hideLayer');
		}	
	})
	.on('getNoData',function(){
		$this.search('appendLayer','').search('hideLayer');
	})
	.on('click','.search-item',function(){
			$elem.search('setInputVal',$(this).html());
			$elem.search('submit');
	});
	function createSearchLayer(data,maxNum){
		if(data.result.length==0){
			return '';
		}
		var html='';
		for(var i=0;i<data.result.length;i++){
			if(i>maxNum) break;
			html+='<li class="search-item">'+data.result[i][0]+'</li>';
		};
		return html;
	}	

	/*分类面板开始*/
	var $category=$('.category .dropdown');
		$category.on('dropdown-show',function(ev){//当将要show的时候,向服务器获取数据
			var $this=$(this);
			//获取要请求的地址
			var loadUrl=$this.data('load');
			var isLoaded=$this.data('isLoaded');
			//如果没有网络延时，直接返回
			if(!loadUrl) return;
			//如果已经请求过数据，直接返回
			if(isLoaded) return;
			//如果有地址,则发送数据
			$.getJSON(loadUrl,function(data){
				var html='';
				console.log(data);
				for(var i=0;i<data.length;i++){
					html += '<dl class="category-details clearfix"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">';
					for(var j=0;j<data[i].length;j++){
						html+='<a href="#" class="link">'+data[i].items[j]+'</a>'
					}
				};
				html+='</dd></dl>';
				//模拟网络延时
				setTimeout(function(){
					$this.find('.dropdown-layer').html(html);
					$this.data('isLoaded',true);
				},1000);
			})
	});
	$category.dropdown({
		css3:true,
		js:false,
		mode:'slideLeftRight',
		delay:300
	});
	/*分类面板结束*/
})(jQuery);

