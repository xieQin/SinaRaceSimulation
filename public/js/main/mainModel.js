define(['app'],function(App) {

	function Main(values) {
		values = values || {};
		this.id = values['id'] || Math.floor((Math.random() * 100000) + 5).toString();
		this.string = values['string'] || '';
	}

	return Main;
});