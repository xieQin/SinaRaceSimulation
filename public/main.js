require.config({
	paths: {
		jquery: 'lib/jquery',
		handlebars: "lib/handlebars",
		text: "lib/text",
		hbs: "lib/hbs"
	},
	shim: {
		handlebars: {
			exports: "Handlebars"
		}
	}
});
require([
	'app'
], function(App) {
	App.init();
});
