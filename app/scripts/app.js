var QAP = angular.module('QAP',['QuestionsList']);

function QAPRouteConfig($routeProvider) {

	$routeProvider
	.when('/', {
		controller: 'QuestionsListController',
		templateUrl: 'views/questions-list.html'
	})
	.when('/ask-question', {
		controller: 'AskQuestionController',
		templateUrl: 'views/ask-question.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}

QAP.config(QAPRouteConfig);
