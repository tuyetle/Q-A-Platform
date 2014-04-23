var QuestionControllers = angular.module('QuestionControllers', ['services']);


QuestionControllers.controller('QuestionsListController', function($scope, Questions, Categories, $routeParams) {
	$scope.showCarousel = true;

	$scope.sortOption = {
		predicate: 'title',
		reverse: false
	};

	if($routeParams.id) {
		$scope.questions = Questions.queryByCategory($routeParams.id);
		$scope.showCarousel = false;
	} else {
		$scope.questions = Questions.query();
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

QuestionControllers.controller('QuestionsListItemController', function($scope, Answers, Categories) {
	$scope.answersLength = Answers.getAnswersLengthByQuestionId($scope.question.id);
	$scope.statusLabelClass = $scope.answersLength > 0 ? 'label-success':'label-default';
	$scope.categories = Categories.getCategoriesByIDs($scope.question.categoryIDs);
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
	$scope.askQuestion = function () {
		$scope.newQuestion.categories = $scope.selectedCategories;
		$scope.newQuestion.date = "21-04-2014";
		Questions.askQuestion($scope.newQuestion);
	}
});

QuestionControllers.controller('QuestionDetailsController', function($scope, Questions, Answers, $routeParams) {
	
	$scope.questionId = $routeParams.id;
	$scope.question = Questions.getQuestionDetail($scope.questionId);
	$scope.answersForThis = Answers.getAnswersByQuestionId($scope.questionId);
	
	$scope.resetAnswer = function (obj, event) {
		console.log(obj)
		console.log(event)
	}
	
});
