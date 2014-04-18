var QuestionsList = angular.module('QuestionsList', ['services']);


QuestionsList.controller('QuestionsListController', function($scope, Questions, $routeParams) {
	if($routeParams.id) {
		console.log($routeParams.id);
		// $scope.questions = Questions.queryByCategory();
	} else {
		$scope.questions = Questions.query();
	}
});


QuestionsList.controller('AskQuestionController', function($scope, Questions) {
	console.log('AskQuestionController is running');
});
