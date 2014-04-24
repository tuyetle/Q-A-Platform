var ServicesModule = angular.module('services', []);

ServicesModule.factory('Users',function () {
	var data = [
		{
			id: 1,
			name: 'Hòa',
			joinDate: '01-01-2014',
			avatar: 'http://cozio.com/forum/Skins/Classic/Images/EmotIcons/Blink.gif',
			point: 754
		},{
			id: 2,
			name: 'Tuyết',
			joinDate: '01-01-2014',
			avatar: 'http://m.essentialbaby.com.au/forums/public/style_emoticons/default/biggrin.png',
			point: 812
		},{
			id: 3,
			name: 'Tuyến',
			joinDate: '01-01-2014',
			avatar: 'http://www.essentialbaby.com.au/forums/style_emoticons/default/glare.gif',
			point: 813
		},{
			id: 4,
			name: 'Thảo',
			joinDate: '01-01-2014',
			avatar: 'http://community.babycenter.com/js/tinymce_3_5_6/plugins/smileys/img/smiley-yell.gif',
			point: 566
		},{
			id: 5,
			name: 'Long',
			joinDate: '01-01-2014',
			avatar: 'http://community.babycenter.com/js/tinymce_3_2_5/plugins/smileys/img/smiley-cool.gif',
			point: 235
		}
	];
	
	var Users = {
		query: function () {
			return data;
		},
		getUserById: function (id) {
			return _.find(data,function(rw){ return rw.id == id });
		},
		getCurrentUser: function () {
			return data[4];
		}
	};
	return Users;
});

ServicesModule.factory('Questions',function() {
	var data = [{
		id: 1,
		title: 'Sao nóng quá vậy nè???',
		description: "Trời nóng quá là nóng phải làm sao đây?",
		userID: 1,
		date: '20-04-2014',
		categoryIDs: [1]
	}, {
		id: 2,
		title: 'Why international public opinion did not support the Hungarian Revolution of 1956?',
		description: 'Why why why why ?',
		userID: 2,
		date: '20-04-2014',
		categoryIDs: [1,10]
	}, {
		id: 3,
		title: 'How long do you think it would take the average person to be able to learn to draw from a living?',
		description: 'I want to draw good enough that I can make a living from it and Im starting my drawing training today although I have been drawing(hundreds of drawings) since last year but not as serious as Im about to get now as I need to be good enough to make a living at it. Im curious as to what you think about this. Im a young adult by the way.',
		userID: 3,
		date: '20-04-2014',
		categoryIDs: [1]
	}, {
		id: 4,
		title: 'When will be Germany and Austria available in Google Street View?',
		description: 'Almost all others country are already available, but Germany and Austria still not. I dont understand why...:-(',
		userID: 4,
		date: '20-04-2014',
		categoryIDs: [5]
	}, {
		id: 5,
		title: 'Download flappy bird?',
		description: 'Is it still available anywhere? or is it gone forever because I accidentally deleted...',
		userID: 5,
		date: '20-04-2014',
		categoryIDs: [5]
	}, {
		id: 6,
		title: 'How to fix dissapeared text and folders in window 7?',
		description: 'I accedently sitched off my pc directly through ups! after that my pc recoverd automatically! after that i cant see any text under folders and icons in desktop! my start menu dosent open,...',
		userID: 1,
		date: '20-04-2014',
		categoryIDs: [5,10]
	}, {
		id: 7,
		title: 'What are your top ten Disney movies?',
		description: 'Hi I was thinking \'bout having a Disney movie marathon and I was wondering if you could give me your top ten...',
		userID: 2,
		date: '20-04-2014',
		categoryIDs: [9]
	}, {
		id: 8,
		title: 'Why do we lose our interest for a song?',
		description: 'So i might find a song i love to pieces, and upon hearing it i feel like my life is complete. But after listening to it over and over it gets old and don\'t enjoy it...',
		userID: 3,
		date: '20-04-2014',
		categoryIDs: [9]
	}, {
		id: 9,
		title: 'Do you know what song this is?',
		description: 'youtube.com/watch?v=HoYA68W0dcY Bum ba la bum - can\'t get it out of my head and need more :3',
		userID: 4,
		date: '20-04-2014',
		categoryIDs: [1]
	}, {
		id: 10,
		title: 'The Walking Dead Comics?',
		description: 'I have read all of The Walking Dead comics online so far. But I want to start getting a copy and reading them.',
		userID: 5,
		date: '20-04-2014',
		categoryIDs: [5,10,9]
	}];
	
	var Questions = {
		query: function() {
			return data;
		},
		askQuestion: function(question) {
			_.extend(question, {id: data.length + 1, answers: 0});
			return data.push(question); //return the length of data
		},
		queryByCategory: function(id){

			var arrayResult = _.filter(data, function(q){ 
				return q.categoryIDs.indexOf(id) != -1 
			});

			return arrayResult;
		},
		getQuestionLengthByCategory: function(id) {
			return this.queryByCategory(id).length;
		},
		getQuestionDetail: function (id) {
			for (var i = 0; i < data.length; i++) {
   				if ( data[i].id == id ) {
					return data[i];
				}
   			};
   			return null;
		}
	}
	return Questions;
});

ServicesModule.factory('Categories', function() {
	var data = {
		1: {'id': 1, 'name': 'Arts & Humanities'}, 
		2: {'id': 2, 'name': 'Beauty & Style'},
		3: {'id': 3, 'name': 'Business & Finance'},
		4: {'id': 4, 'name': 'Cars & Transportation'}, 
		5: {'id': 5, 'name': 'Computers & Internet'},
		6: {'id': 6, 'name': 'Dining Out'},
		7: {'id': 7, 'name': 'Consumer Electronics'},
		9: {'id': 9, 'name': 'Entertainment & Music'},
		10: {'id': 10, 'name': 'Education & Reference'}
	};
   	var Categories = {
   		query: function() {
   			return data;
   		},
   		getCategoriesByIDs: function(ids) {
   			var arr = [];
   			for (var i = 0; i < ids.length; i++) {
   				var id = ids[i];
   				if(data[id])
   					arr.push(data[id]);
   			};
   			return arr;
   		}
   	};
	return Categories;
});

ServicesModule.factory('Answers', function() {
	var data = {
		1:[
			{
				'id': 1,
				'date': '22-04-2014',
				'userID': 1,
				'content': 'Bật điều hòa lên!',
				'point': 3,
				'ratedBy': [2,3,4]
			},{
				'id': 2,
				'date': '22-04-2014',
				'userID': 2,
				'content': 'Đi tắm đi!',
				'point': 2,
				'ratedBy': [2,3]
			},{
				'id': 3,
				'date': '22-04-2014',
				'userID': 3,
				'content': 'Cởi đồ ra!',
				'point': 0,
				'ratedBy': [2,3]
			},{
				'id': 4,
				'date': '22-04-2014',
				'userID': 4,
				'content': 'Mở máy quạt!',
				'point': 4,
				'ratedBy': [2,3,4,5]
			},{
				'id': 5,
				'date': '22-04-2014',
				'userID': 5,
				'content': 'Tui không biết!',
				'point': -2,
				'ratedBy': [2,3]
			}
		],
		2:[
			{
				'id': 6,
				'date': '22-04-2014',
				'userID': 1,
				'content': 'Tui không biết!',
				'point': 10,
				'ratedBy': []
			},{
				'id': 7,
				'date': '22-04-2014',
				'userID': 2,
				'content': 'Tui không biết!',
				'point': 10,
				'ratedBy': []
			},{
				'id': 8,
				'date': '22-04-2014',
				'userID': 3,
				'content': 'Tui không biết!',
				'point': 8,
				'ratedBy': []
			},{
				'id': 9,
				'date': '22-04-2014',
				'userID': 4,
				'content': 'Tui không biết!',
				'point': 5,
				'ratedBy': []
			},{
				'id': 10,
				'date': '22-04-2014',
				'userID': 5,
				'content': 'Tui không biết!',
				'point': -6,
				'ratedBy': []
			}
		],
		3:[
			{
				'id': 11,
				'date': '22-04-2014',
				'userID': 1,
				'content': 'Tui không biết!',
				'point': 10,
				'ratedBy': []
			},{
				'id': 12,
				'date': '22-04-2014',
				'userID': 2,
				'content': 'Tui không biết!',
				'point': 10,
				'ratedBy': []
			},{
				'id': 13,
				'date': '22-04-2014',
				'userID': 3,
				'content': 'Tui không biết!',
				'point': 8,
				'ratedBy': []
			},{
				'id': 14,
				'date': '22-04-2014',
				'userID': 4,
				'content': 'Tui không biết!',
				'point': 5,
				'ratedBy': []
			},{
				'id': 15,
				'date': '22-04-2014',
				'userID': 5,
				'content': 'Tui không biết!',
				'point': -6,
				'ratedBy': []
			}
		]
	};
	var Answers = {
		query: function() {
			return data;
		},
		getAnswerById: function(questionId, answerId) {
			return _.find(data[questionId],function(rw){ return rw.id == answerId });
		},
		getAnswersByQuestionId: function (id) {
			if ( !data[id] ) {
				data[id] = [];
			}
			return data[id];
		},
		getAnswersLengthByQuestionId: function(id) {
			return data[id] == undefined ? 0 : data[id].length;
		},
		rateAnswer: function (questionId, answerId, point, currentUserId) {
			var answer = _.find(data[questionId],function(rw){ return rw.id == answerId });
			if ( answer.ratedBy.indexOf(currentUserId) < 0 && answer.userID != currentUserId ) {
				answer.ratedBy.push(currentUserId);
				answer.point += point;
			}
			return false;
		},
		insertAnswer: function (questionId,answer) {
			
			var answerLength = 0;
			for(var obj in data) {
				answerLength += data[obj].length;
			}
			_.extend(answer, {id: answerLength + 1});
			return data[questionId].push(answer);
		
		}
	};
	return Answers;
});