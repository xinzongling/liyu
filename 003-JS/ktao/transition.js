

;(function(w){
	//console.log(document.body.style.transition);
	var transitionEventName={
		transition:'transitionend',
		MozTransition:'transitionend',
		WebkitTransition:'webkitTransitionEnd',
		OTransition:'oTransitionEnd'
	}
	var transition={
		end:'',
		isSupport:false
	}
	for(key in transitionEventName){
		if(document.body.style.transition !== undefined){
			transition.end=transitionEventName[key];
			transition.isSupport=true;
			break;
		}
	}
	//用命名空间
	w.kuazhu=w.kuazhu||{};
	w.kuazhu.transition=transition;
})(window);