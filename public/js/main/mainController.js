define(["app","js/main/mainView", "js/main/mainModel"], function(App, MainView, Main) {
	function init(query){
		
		main = new Main();

		MainView.render({
			model: main,
		});
	}

	return {
		init: init
	};
});