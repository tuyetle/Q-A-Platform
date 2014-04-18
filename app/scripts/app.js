var QAP = angular.module('QAP', ['QuestionsList']);

function QAPRouteConfig($routeProvider) {


	$routeProvider
	.when('/', {
		controller: 'QuestionsListController',
		templateUrl: 'views/questions-list.html'
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

QAP.controller('CategoriesListController', function($scope) {
        // Category
        $scope.categoryList = [
        	{id: '01',name: 'Hardware', number:'1'}, 
        	{id: '02',name: 'Software', number:'5'},
        	{id: '03',name: 'Life experiences', number:'8'},
        	{id: '04',name: 'The love', number:'10'}, 
        	{id: '05',name: 'The family', number:'15'},
        	{id: '06',name: 'Beauty', number:'20'},
        	{id: '07',name: 'Entertainment', number:'11'},
        	{id: '08',name: 'Motherhood', number:'12'}
       	];
       	$scope.selectedCategory = '01';

       	$scope.selectCategory = function(categoryId){
			$scope.selectedCategory = categoryId;		
       	}

    });
