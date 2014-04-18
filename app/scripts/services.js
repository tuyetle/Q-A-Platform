var ServicesModule = angular.module('services', []);


ServicesModule.factory('Questions',function() {
	var data = [

	];
	var Questions = {
		query: function() {
			return data;
		}
	}
	return Questions;
});