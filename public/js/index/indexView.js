define(['jquery', 'hbs!js/index/index'], function($, viewTemplate) {

	function render(params) {
		params.model.string = "hello world";
		var html = viewTemplate({ model: params.model });
		$(".right").append(html);
	}

	return {
		render: render
	};
});