var QuestionControllers = angular.module('QuestionControllers', ['services', 'filters']);


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
		$scope.featuredQuestions = Questions.getFeaturedQuestion();
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

	$scope.maxlength = function(){

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

QuestionControllers.controller('AnswerItemController', function ($scope, Answers, Users, $routeParams, $routeParams) {
	$scope.questionId = $routeParams.id;
	$scope.answers = Answers.getAnswerById($scope.questionId, $scope.answer.id);
	$scope.answerUser = Users.getUserById($scope.answers.userID);
});

QuestionControllers.controller('QuestionDetailsController', function($scope, Questions, Answers, Users, $routeParams) {
	$scope.questionId = $routeParams.id;
	$scope.question = Questions.getQuestionDetail($scope.questionId);
	$scope.questionOwner = Users.getUserById($scope.question.userID);
	
	$scope.answersForThis = Answers.getAnswersByQuestionId($scope.questionId);
});

QuestionControllers.controller('AddAnswerController', function($scope, Answers, Users, $routeParams) {

	$scope.questionId = $routeParams.id;
	$scope.newAnswerContent = null;
	
	$scope.addAnswer = function () {
		$scope.newAnswer = {
			'id': null,
			'date': null,
			'userID': Users.getCurrentUser().id,
			'content': null,
			'point': 0
		};
		var today = new Date();
		$scope.newAnswer.date = today;
		$scope.newAnswer.content = $scope.newAnswerContent;
		Answers.insertAnswer($scope.questionId, $scope.newAnswer);
	};

});