window.onload = function(){
	var box = document.getElementById('box');
	var bg = document.getElementById('bg');
	var aSpan = document.getElementsByTagName('span');
	var onOff = false;
//	给盒子添加点击事件
	box.onclick = function(){
		if(onOff) return;
		onOff = true;
		
		mTween(bg,'width',500,1000,'linear')
		mTween(bg,'opacity',1,1000,'linear',function(){
			mTween(bg,'opacity',0,1000,'linear',function(){
				bg.style.width = 0;
			})
		});
		
		for(var i = 0; i < aSpan.length; i++){
			fn(i);
		}
	};
	
	function fn(i){
		setTimeout(function(){
			mTween(aSpan[i],'top',-100,500,'linear')
			mTween(aSpan[i],'opacity',0,500,'linear',function(){
				if(i >= aSpan.length-1){
					for(var j = 0; j < aSpan.length; j++){
						aSpan[j].style.top = 0;
						mTween(aSpan[j],'opacity',1,500,'linear')
					}
					onOff = false;
				}
			})
		},i*100)
	}
}
