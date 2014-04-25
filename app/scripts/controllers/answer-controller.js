var AnswersControllers = angular.module('QAP.AnswersControllers', ['QAP.services','QAP.filters','ngCookies']);

// ANSWER OF QUESTION DETAIL
AnswersControllers.controller('AnswerItemController', function ($scope, $filter, Answers, Users, $routeParams) {

	$scope.questionId = $routeParams.id;
	$scope.answer = Answers.getAnswerById($scope.questionId, $scope.answer.id);
	$scope.answerUser = Users.getUserById($scope.answer.userID);
	
	$scope.rateAvai = function() {
		return ($scope.answer.userID == QAP.currentUserId || $scope.answer.ratedBy.indexOf(QAP.currentUserId) > 0) ? 0 : 1;
	} 

	// LIKE OR DISLIKE ANSWER
	$scope.rate = function (point) {
		if ( $scope.rateAvai() ) {
			Answers.rateAnswer($scope.questionId,$scope.answer.id,point,QAP.currentUserId);
			$scope.answerUser.point+=point;
			$scope.rateAvai = 0;
			Users.save();
		}
		return false;
	};
});

// ADD YOUR ANSWER
AnswersControllers.controller('AddAnswerController', function($scope, $filter, Answers, Users, $routeParams) {

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