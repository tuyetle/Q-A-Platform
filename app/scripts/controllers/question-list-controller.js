var QuestionControllers = angular.module('QuestionControllers', ['services']);


QuestionControllers.controller('QuestionsListController', function($scope, Questions, Categories, $routeParams) {
	
	$scope.sortOption = {
		predicate: 'title',
		reverse: false
	};

	if($routeParams.id) {
		$scope.questions = Questions.queryByCategory($routeParams.id);
	} else {
		$scope.questions = Questions.query();
	}
	$scope.getCategoryNames = function(ids) {
		return Categories.getCategoryNamesByIDs(ids);
	}
	


	$scope.changePredicate = function(newPredicate) {
		switch(newPredicate) {
			case 'popular':
				$scope.sortOption.predicate = "anwsers";
				$scope.sortOption.reverse = true;
				break;
			default:
				$scope.sortOption.predicate = "title";
				$scope.sortOption.reverse = false;
				break;
		}
	}
});


QuestionControllers.controller('AskQuestionController', function($scope, Questions, Categories) {
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

QuestionControllers.controller('QuestionDetailsController', function($scope, $routeParams) {
	console.log('QuestionDetailsController');
	$scope.testID = $routeParams.id;
});
