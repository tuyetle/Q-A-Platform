var filters = angular.module('filters', []);

filters.filter('truncate', function() {
	return function(input, limit) {
		var finalText = "";
		var words = input.replace(/\s+/g, ' ').split(' ');
		var numberOfWords = words.length;
		var i=0;
		if(numberOfWords > limit)
		{
			for (i=0; i < limit; i++) {
				finalText = finalText+" "+ words[i];
			}
			return finalText+"...";
		}
		else return input;
	}
})