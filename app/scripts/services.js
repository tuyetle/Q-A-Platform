var ServicesModule = angular.module('services', []);


ServicesModule.factory('Questions',function() {
	var data = [
	    {id: '01', title: 'Question 1', user: "user 1", date: '20-04-2014', anwsers: 12, categoryIDs: '01'},
		{id: '02', title: 'Question 2', user: "user 2", date: '20-04-2014', anwsers: 12, categoryIDs: '02'},
		{id: '03', title: 'Question 3', user: "user 3", date: '20-04-2014', anwsers: 12, categoryIDs: '03'},
		{id: '04', title: 'Question 4', user: "user 4", date: '20-04-2014', anwsers: 12, categoryIDs: '04'},
		{id: '05', title: 'Question 5', user: "user 5", date: '20-04-2014', anwsers: 12, categoryIDs: '05'},
		{id: '06', title: 'Question 6', user: "user 6", date: '20-04-2014', anwsers: 12, categoryIDs: '06'},
		{id: '07', title: 'Question 7', user: "user 7", date: '20-04-2014', anwsers: 12, categoryIDs: '07'},
		{id: '08', title: 'Question 8', user: "user 8", date: '20-04-2014', anwsers: 12, categoryIDs: '08'},
		{id: '09', title: 'Question 9', user: "user 9", date: '20-04-2014', anwsers: 12, categoryIDs: '01'},
		{id: '10', title: 'Question 10', user: "user 10", date: '20-04-2014', anwsers: 12, categoryIDs: '02'}
	];
	var Questions = {
		query: function() {
			return data;
		},
		askQuestion: function(question) {
			_.extend(question, {id: data.length + 1, answers: 0});
			return data.push(question); //return the length of data
		}
	}
	return Questions;
});

ServicesModule.factory('Categories', function() {
	var data = [
        	{id: '01',name: 'Hardware', number:'1'}, 
        	{id: '02',name: 'Software', number:'5'},
        	{id: '03',name: 'Life experiences', number:'8'},
        	{id: '04',name: 'The love', number:'10'}, 
        	{id: '05',name: 'The family', number:'15'},
        	{id: '06',name: 'Beauty', number:'20'},
        	{id: '07',name: 'Entertainment', number:'11'},
        	{id: '08',name: 'Motherhood', number:'12'}
       	];
   	var Categories = {
   		query: function() {
   			return data;
   		}
   	};
	return Categories;

});