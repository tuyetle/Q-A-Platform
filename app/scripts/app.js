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
QAP.currentUserId = 5;
QAP.cookies = {
	'answers': 'answers',
	'users': 'users',
	'questions': 'questions',
	'categories': 'categories'
};

QAP.controller('MainController', function ($scope, $location, $cookieStore, Questions, Answers, Users, Categories) {
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
	Categories.query();
});

QAP.controller('CategoriesListController', function ($scope, Categories) {
    // Category
    $scope.categoryList = Categories.query();

   	$scope.selectedCategory = '-1';

   	$scope.selectCategory = function(id) {
   		$scope.selectedCategory = id;
   	}
});

QAP.controller('UsersController', function ($scope, Users) {
    $scope.users = Users.query();
	$scope.currentUser = Users.getUserById(QAP.currentUserId);
	
	$scope.login = function (id) {
		$scope.currentUser = Users.getUserById(id);
		QAP.currentUserId = $scope.currentUser.id;
		return false;
	};
});
