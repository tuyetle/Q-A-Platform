var ServicesModule = angular.module('services', []);


ServicesModule.factory('Questions',function() {
	var data = [
	    {'id': '01',
		'title': 'Question 1',
		'user': "user 1",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '02',
		'title': 'Question 2',
		'user': "user 2",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '03',
		'title': 'Question 3',
		'user': "user 3",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '04',
		'title': 'Question 4',
		'user': "user 4",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '05',
		'title': 'Question 5',
		'user': "user 5",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '06',
		'title': 'Question 6',
		'user': "user 6",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '07',
		'title': 'Question 7',
		'user': "user 7",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '08',
		'title': 'Question 8',
		'user': "user 8",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '09',
		'title': 'Question 9',
		'user': "user 9",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '10',
		'title': 'Question 10',
		'user': "user 10",
		'date': '20-04-2014',
		'anwsers': 12}
	];
	var Questions = {
		query: function() {
			return data;
		}
	}
	return Questions;
});