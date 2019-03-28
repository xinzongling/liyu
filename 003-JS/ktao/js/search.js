;(function ($){
	var $searchForm=$('#search-form');
	var $searchInput=$('.search-input');
	var $searchLayer=$('.search-layer');
	$searchForm.on('submit',function(){
		if(getInputVal()==''){
			return false;
		}
	});
	function getInputVal(){
		return $.trim($searchInput.val()); //trim会去掉字符串两头的空格
	};
	function removeHTMLTag(str){
		return str.replace(/<[^<|>]+>/g,'');
	}
	var url='https://suggest.taobao.com/sug?code=utf-8&_ksTS=1550996358591_924&callback=jsonp925&k=1&area=c2c&bucketid=6&q=';
	//当用户输入时动态获取数据
	$searchInput.on('input',function(){
		//获取服务器数据
		$.ajax({
			url:url+getInputVal(),
			dataType:'jsonp',
			jsonp:'callback'
		})
		.done(function(data){
			//console.log(data);
			if(data.result.length==0){
				$searchLayer.html('').hide();
				return;
			}
			var dataNum=5;
			var html='';
			for(var i=0;i<data.result.length;i++){
				if(i>dataNum) break;
				html+='<li class="search-item">'+data.result[i][0]+'</li>';
			};
			$searchLayer.html(html).show();
		})
		.fail(function(err){
			$searchLayer.html('').hide();
		})
		.always(function(){
			console.log('always...')
		});
	});


	//处理提交,通过事件代理完成下拉提交
		$searchLayer.on('click','.search-item',function(){
			console.log(this);
			$searchInput.val(removeHTMLTag($(this).html()));
			$searchForm.trigger('submit');
		});
		$(document).on('click',function(){
			$searchLayer.hide();
		});

		//当下拉菜单点回来能让下拉菜单继续显示。
		$searchInput
		.on('focus',function(){
			if($.trim($searchLayer.html()) == ''){
				$searchLayer.hide();
			}else{
				$searchLayer.show();
			};
		})
		.on('click',function(ev){
			ev.stopPropagation();
		});
})(jQuery)