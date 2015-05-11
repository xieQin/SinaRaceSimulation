define(["app","js/index/indexView", "js/index/indexModel"], function(App, IndexView, Index) {
	function init(query){
		
		index = new Index();

		IndexView.render({
			model: index,
		});
	}

	return {
		init: init
	};
});