define(['jquery', 'hbs!js/main/main'], function($, viewTemplate) {

	function render(params) {
		params.model.string = "this is a demo";
		var html = viewTemplate({ model: params.model });
		$(".right").append(html);
	}

	return {
		render: render
	};
});