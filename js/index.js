(function(window, document){
	'use strict';
	var start = function(){
		var librery = {
			/*aqui van las funciones*/
		};
		return librery;
	}
	/*asignamos la libreria a objeto global*/
	if(typeof window.librery === 'undefined'){
		window.librery = window._=start();
	}else{
		console.log('se esta llamando la libreria nuevamente');
	}
<<<<<<< HEAD
})(window,document); 
=======
})(window,document);
>>>>>>> 074e471dcb78fe24e12c41cfb5090f8e4fbef737
