;(function($){
	//共同的初始化方法
	function init($elem,hiddencallback){
		if($elem.is(':hidden')){
			$elem.data('status','hidden');
			if(typeof hiddencallback=='function') hiddencallback();
		}else{
			$elem.data('status','shown');
		}
	};
	function show($elem,callback){
		if($elem.data('status')=='shown')  return;
		if($elem.data('status')=='show')  return;
		$elem.data('status','show').trigger('show');
		callback();
	}
	function hide($elem,callback){
			if($elem.data('status')=='hidden')  return;
			if($elem.data('status')=='hide')  return;
			$elem.data('status','hide').trigger('hide');
			callback();
	}
	var silent={	
		init:function($elem){
			init($elem)
		},
		show:function($elem){  //判断当前状态的目的是为了防止多次触发事件			
			show($elem,function(){
					$elem.show(); //改变的其实是display
					$elem.trigger('shown').data('status','shown');
			})			
		},
		hide:function($elem){
			
			hide($elem,function(){
				$elem.hide();
				$elem.trigger('hidden').data('status','hidden');
			});
		}
	};
    //css3实现显示和隐藏
    var css3={
    	//淡入淡出的显示隐藏
    	fade:{
			init:function($elem){
				css3._init($elem,'fadeout');
			},
    		show:function($elem){ 			
    			css3._show($elem,'fadeout');
    		},
    		hide:function($elem){
    			css3._hide($elem,'fadeout');
    		}
    	},
    	//上下卷入的显示和隐藏
    	slideUpDown:{
    		init:function($elem){
    			$elem.height($elem.height());
				css3._init($elem,'slideUpDownCollapse');
			},
    		show:function($elem){ 			
    			css3._show($elem,'slideUpDownCollapse');
    		},
    		hide:function($elem){
    			css3._hide($elem,'slideUpDownCollapse');
    		}
    	},
    	//左右卷入卷出的显示和隐藏
    	slideLeftRight:{
    		init:function($elem){
    			$elem.width($elem.width());
				css3._init($elem,'slideLeftRightCollapse');
			},
    		show:function($elem){ 			
    			css3._show($elem,'slideLeftRightCollapse');
    		},
    		hide:function($elem){
    			css3._hide($elem,'slideLeftRightCollapse');
    		}
    	},
    	//淡入淡出的上下卷入卷出的显示和隐藏
    	fadeSlideUpDown:{
    		init:function($elem){
    			$elem.height($elem.height());
				css3._init($elem,'fadeout slideUpDownCollapse');
			},
    		show:function($elem){ 			
    			css3._show($elem,'fadeout slideUpDownCollapse');
    		},
    		hide:function($elem){
    			css3._hide($elem,'fadeout slideUpDownCollapse');
    		}
    	},
    	//淡入淡出的左右卷入卷出的显示和隐藏
    	fadeSlideLeftRight:{
    		init:function($elem){
    			$elem.width($elem.width());
				css3._init($elem,'fadeout slideLeftRightCollapse');
			},
    		show:function($elem){ 			
    			css3._show($elem,'fadeout slideLeftRightCollapse');
    		},
    		hide:function($elem){
    			css3._hide($elem,'fadeout slideLeftRightCollapse');
    		}
    	}
    };
    css3._init=function($elem,className){
    		$elem.addClass('transition');
			init($elem,function(){
				$elem.addClass(className);	
			});
    }
    css3._show=function($elem,className){
			show($elem,function(){
				$elem.show();
				$elem
				.off(kuazhu.transition.end) //为了解决用户频繁点击触发事件多次执行
				// one只绑定一次事件,并且触发完后就自动移出事件了
				.one(kuazhu.transition.end,function(){
					$elem.trigger('shown').data('status','shown');
				});
				//此处添加定时器的目的是为了等待元素由display:none变为display:block;
				setTimeout(function(){
					$elem.removeClass(className);
				},20);
			})
    }
    css3._hide=function($elem,className){
			hide($elem,function(){
				//过渡完成后触发事件
    			$elem.off(kuazhu.transition.end).one(kuazhu.transition.end,function(){ //one只绑定一次事件
    				console.log('transition..')
    				$elem.hide(); //display:none;
    				$elem.trigger('hidden').data('status','hidden');
    			})
    			//触发了过渡
    			$elem.addClass(className);
    		})
    }

	//js实现显示和隐藏
	var js={
		//淡入淡出的显示隐藏
		fade:{
			init:function($elem){
				js._init($elem);
			},
			show:function($elem){
				js._show($elem,'fadeIn');
			},
			hide:function($elem){
				hide($elem,function(){
					js._hide($elem,'fadeOut');
				});
			}
		},
		//上下卷入卷出的显示隐藏
		slideUpDown:{
    		init:function($elem){
				js._init($elem);
			},
			show:function($elem){
				js._show($elem,'slideDown');
			},
			hide:function($elem){
				js._hide($elem,'slideUp');
			}
    	},
    	//左右卷入卷出的显示隐藏
    	slideLeftRight:{
    		init:function($elem){

				js._customInit($elem,{
						width:'0px',
						paddingLeft:'0px',
						paddingRight:'0px'
					})

    		},
    		show:function($elem){

				js._customShow($elem);

    		},
    		hide:function($elem){

					js._customHide($elem,{
						width:'0px',
						paddingLeft:'0px',
						paddingRight:'0px'
					})
    		}
    	},
    	//上下淡入淡出的显示隐藏
    	fadeSlideTopBottom:{
    		init:function($elem){

				js._customInit($elem,{
						height:'0px',
						paddingTop:'0px',
						paddingBottom:'0px',
						opacity:0
					})
    		},
    		show:function($elem){

				js._customShow($elem);
    		},
    		hide:function($elem){

				js._customHide($elem,{
						height:'0px',
						paddingTop:'0px',
						paddingBottom:'0px',
						opacity:0
					})
    		}
    	},
    	//左右淡入淡出的显示隐藏
    	fadeSlideLeftRight:{
    		init:function($elem){

				js._customInit($elem,{
						width:'0px',
						paddingLeft:'0px',
						paddingRight:'0px',
						opacity:0
					})
    		},
    		show:function($elem){

				js._customShow($elem);
    		},
    		hide:function($elem){

				js._customHide($elem,{
						width:'0px',
						paddingLeft:'0px',
						paddingRight:'0px',
						opacity:0
					})
    		}
    	}
	};
	js._init=function($elem){
		$elem.removeClass('transition');//避免和CSS3发生冲突
		init($elem);
	};
	js._show=function($elem,mode){
		show($elem,function(){
			$elem.stop()[mode](function(){
				$elem.trigger('shown').data('status','shown');
			});
		});
	};
	js._hide=function($elem,mode){
		hide($elem,function(){
			$elem.stop()[mode](function(){
				$elem.trigger('hidden').data('status','hidden');
			});
		});
	};
	js._customInit=function($elem,options){
		$elem.removeClass('transition');
					var styles={};
					for(key in options){
						styles[key]=$elem.css(key);
					}
					//把原始值存储下来				
					$elem.data('styles',styles);
				    init($elem,function(){
					//把垂直高度置零
					$elem.css(options);
				});
	};
	js._customShow=function($elem){
		$elem.show();//display:block;
		$elem.stop().animate($elem.data('styles'),function(){
			$elem.trigger('shown').data('status','shown');
		})
	};
	js._customHide=function($elem,options){
		$elem.stop().animate(options,function(){
			$elem.hide();
			$elem.trigger('hidden').data('status','hidden');
		})
	};

	//根据传递进来的对象来决定用什么类型的显示和隐藏
	
	function showHide($elem,options){

		var showHideFn=null;
		if(options.css3 && kuazhu.transition.isSupport){
			showHideFn=css3[options.mode];
		}else if(options.js){
			showHideFn=js[options.mode];
		}else {
			showHideFn=silent;
		};
		showHideFn.init($elem);
		return {
			show:showHideFn.show,
			hide:showHideFn.hide
		};
	};
	$.fn.extend({   
		showHide:function(options){ //让jQuery上拥有showHide方法。
			var defaults={
				css3:false,
				js:false,
				mode:'fade'
			};
			console.log(this)
			//外边的this指的是一个jQuery对象，包括每一个选择的DOM元素
			this.each(function(){
				var $elem=$(this);//this指的是每一个DOM节点
				var mode=$elem.data('mode')//第一次取值没有mode，所以是undefined//对象
				//单例模式
				if(!mode){
					options=$.extend(defaults,options);//参数的合并，以后边的为准
					mode=showHide($elem,options);
					//把有方法的show,hide对象存储到DOM元素上。
					$elem.data('mode',mode);
				};
				if(typeof mode[options] == 'function'){
					mode[options]($elem); //注意：此处需要传参。
				};
			});
			return this   //主要是为了连缀调用
		}
	});	
})(jQuery)