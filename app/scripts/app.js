var QAP = angular.module('QAP', ['QuestionControllers']);

function QAPRouteConfig($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'QuestionsListController',
		templateUrl: 'views/questions-list.html'
	})
	.when('/category/:id', {
		controller: 'QuestionsListController',
		templateUrl: 'views/questions-list.html'
	})
	.when('/q-details/:id', {
		controller: 'QuestionDetailsController',
		templateUrl: 'views/question-details.html'
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

QAP.controller('MainController', function ($scope, $location) {
	$scope.askQuestionPath = '#/ask-question';
	$scope.$location = $location;
	$scope.locationPath = $location.path();
});

QAP.controller('CategoriesListController', function ($scope, Categories) {
        // Category
        $scope.categoryList = Categories.query();

       	$scope.selectedCategory = '-1';

       	$scope.selectCategory = function(id) {
       		$scope.selectedCategory = id;
       	}
 });
