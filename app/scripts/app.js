var QAP = angular.module('QAP', ['QuestionControllers','ngCookies']);

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

QAP.cookies = {
	'answers': 'answers',
	'users': 'users',
	'questions': 'questions'
};

QAP.controller('MainController', function ($scope, $location, $cookieStore, Questions, Answers, Users) {
	$scope.askQuestionPath = '#/ask-question';
	$scope.$location = $location;
	$scope.locationPath = $location.path();
	
	// CLEAR ALL COOKIES
	$scope.clearCookies = function () {
		for(var cookie in QAP.cookies) {
			$cookieStore.remove(cookie);
		}
	};
	
	// LOAD COOKIES
	Questions.query();
	Answers.query();
	Users.query();
});

QAP.controller('CategoriesListController', function ($scope, Categories) {
    // Category
    $scope.categoryList = Categories.query();

   	$scope.selectedCategory = '-1';

   	$scope.selectCategory = function(id) {
   		$scope.selectedCategory = id;
   	}
 });

QAP.controller('CategoryListItemController', function ($scope, Questions) {
	$scope.questionLength = Questions.getQuestionLengthByCategory($scope.category.id);
});
