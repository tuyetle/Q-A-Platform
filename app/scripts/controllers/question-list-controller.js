var QuestionsList = angular.module('QuestionsList', ['services']);


QuestionsList.controller('QuestionsListController', function($scope, Questions, $routeParams) {
	if($routeParams.id) {
		console.log($routeParams.id);
		// $scope.questions = Questions.queryByCategory();
	} else {
		$scope.questions = Questions.query();
	}
});


QuestionsList.controller('AskQuestionController', function($scope, Questions, Categories) {
	$scope.newQuestion = {};
	$scope.selectedCategories = [];
	$scope.categoryList = Categories.query();


	$scope.selectCategory = function(item) {
		var idx = $scope.selectedCategories.indexOf(item);
		 if (idx > -1) {
	      $scope.selectedCategories.splice(idx, 1);
	  	}
	    else {
	      $scope.selectedCategories.push(item);
	    }
	}
	$scope.askQuestion = function() {
		$scope.newQuestion.categories = $scope.selectedCategories;
		$scope.newQuestion.date = "21-04-2014";
		Questions.askQuestion($scope.newQuestion);
	}
});
