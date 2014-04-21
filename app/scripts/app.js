var QAP = angular.module('QAP', ['QuestionsList']);

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
	.when('/ask-question', {
		controller: 'AskQuestionController',
		templateUrl: 'views/ask-question.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}

QAP.config(QAPRouteConfig);

QAP.controller('CategoriesListController', function ($scope, Categories) {
        // Category
        $scope.categoryList = Categories.query();

       	$scope.selectedCategory = '01';

       	$scope.selectCategory = function(categoryId){
			$scope.selectedCategory = categoryId;		
       	}

    });
