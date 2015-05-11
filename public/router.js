define([
	'jquery',
	'app'
], function($, App) {

    function init() {
    	var controller = location.hash.split('#')[1] || 'index';
    	var model = controller;
    	load(controller, model);
    }

	function load(controllerName, query) {
		require(['js/' + controllerName + '/'+ controllerName + 'Controller'], function(controller) {
			controller.init(query);
		});
	}

	return {
        init: init,
		load: load
    };
});