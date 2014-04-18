var QuestionsList = angular.module('QuestionsList',['services']);

QuestionsList.controller('QuestionsListController', function($scope, Questions) {
	$scope.questions = Questions.query();
});

QuestionsList.controller('AskQuestionController', function($scope, Questions) {
	console.log('AskQuestionController is running');
});
