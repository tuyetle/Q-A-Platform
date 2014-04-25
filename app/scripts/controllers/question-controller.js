var QuestionControllers = angular.module('QAP.QuestionControllers', ['QAP.services','QAP.filters','ngCookies','QAP.directives']);

// RENDER QUESTION LIST
QuestionControllers.controller('QuestionsListController', function($scope, Questions, Categories, $routeParams) {
	$scope.showCarousel = true;

	$scope.sortOption = {
		predicate: 'date',
		reverse: true
	};

	if($routeParams.id) {
		$scope.questions = Questions.queryByCategory($routeParams.id);
		$scope.showCarousel = false;
	} else {
		$scope.questions = Questions.query();
	}

	$scope.featuredQuestions = Questions.getFeaturedQuestions();

	$scope.changePredicate = function(newPredicate) {
		switch(newPredicate) {
			case 'popular':
				$scope.sortOption.predicate = "anwsers";
				$scope.sortOption.reverse = true;
				break;
			default:
				$scope.sortOption.predicate = "date";
				$scope.sortOption.reverse = true;
				break;
		}
	}
});

// HANDLE QUESTION ITEM IN LIST
QuestionControllers.controller('QuestionsListItemController', function($scope, Answers, Users, Categories) {
	$scope.answersLength = Answers.getAnswersLengthByQuestionId($scope.question.id);
	$scope.statusLabelClass = $scope.answersLength > 0 ? 'label-success':'label-default';
	$scope.categories = Categories.getCategoriesByIDs($scope.question.categoryIDs);
	
	$scope.askedUser = Users.getUserById($scope.question.userID);
});

// CREATE NEW QUESTION
QuestionControllers.controller('AskQuestionController', function($scope, $filter, $location, Questions, Categories) {
	$scope.newQuestion = {
		id: null,
		title: null,
		description: null,
		userID: QAP.currentUserId,
		date: null,
		categoryIDs: []
	};
	
	$scope.selectedCategories = [];
	$scope.categoryList = Categories.query();

	$scope.selectCategory = function(item) {
		var idx = $scope.selectedCategories.indexOf(item);
		if (idx > -1) {
			$scope.selectedCategories.splice(idx, 1);
	  	} else {
			$scope.selectedCategories.push(item);
	    }
	};
	
	$scope.askQuestion = function () {
		$scope.newQuestion.categoryIDs = $scope.selectedCategories;
		var currentDate = $filter('date')(new Date(), 'yyyy-MM-ddThh:mm:ssZ');
		$scope.newQuestion.date = currentDate;
		Questions.askQuestion($scope.newQuestion);
		Categories.change($scope.newQuestion.categoryIDs);
		$location.path("#/");
	};
});

// QUESTION DETAIL
QuestionControllers.controller('QuestionDetailsController', function($scope, $filter, Questions, Categories, Answers, Users, $routeParams) {
	$scope.questionId = $routeParams.id;
	$scope.question = Questions.getQuestionDetail($scope.questionId);
	$scope.questionOwner = Users.getUserById($scope.question.userID);
	
	$scope.categories = Categories.getCategoriesByIDs($scope.question.categoryIDs);
	
	$scope.answersForThis = Answers.getAnswersByQuestionId($scope.questionId);

});

// ANSWER OF QUESTION DETAIL
QuestionControllers.controller('AnswerItemController', function ($scope, $filter, Answers, Users, $routeParams) {

	$scope.questionId = $routeParams.id;
	$scope.answer = Answers.getAnswerById($scope.questionId, $scope.answer.id);
	$scope.answerUser = Users.getUserById($scope.answer.userID);
	
	$scope.rateAvai = function() {
		return ($scope.answer.userID == QAP.currentUserId || $scope.answer.ratedBy.indexOf(QAP.currentUserId) > 0) ? 0 : 1;
	} 

	// LIKE OR DISLIKE ANSWER
	$scope.rate = function (point) {
		if ( $scope.rateAvai ) {
			Answers.rateAnswer($scope.questionId,$scope.answer.id,point,QAP.currentUserId);
			$scope.answerUser.point+=point;
			$scope.rateAvai = 0;
			Users.save();
		}
		return false;
	};
});

// ADD YOUR ANSWER
QuestionControllers.controller('AddAnswerController', function($scope, $filter, Answers, Users, $routeParams) {

	$scope.questionId = $routeParams.id;
	$scope.newAnswerContent = null;
	
	$scope.addAnswer = function () {
		$scope.newAnswer = {
			'id': null,
			'date': null,
			'userID': QAP.currentUserId,
			'content': null,
			'point': 0,
			'ratedBy': []
		};
		var currentDate = $filter('date')(new Date(), 'yyyy-MM-ddThh:mm:ssZ');
		$scope.newAnswer.date = currentDate;
		$scope.newAnswer.content = $scope.newAnswerContent;
		$scope.newAnswerContent = '';
		Answers.insertAnswer($scope.questionId, $scope.newAnswer);
		return false;
	};
	
	$scope.resetAnswer = function () {
		$scope.newAnswerContent = '';
		return false;
	};

});