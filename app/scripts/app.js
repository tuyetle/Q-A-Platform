var QAP = angular.module('QAP',['QuestionsList']);

function QAPRouteConfig($routeProvider) {

	$routeProvider
	.when('/', {
		controller: 'QuestionsListController',
		templateUrl: 'views/questions-list.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}

QAP.config(QAPRouteConfig);
