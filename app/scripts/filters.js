var filters = angular.module('filters', []);

filters.filter('trunCate', function() {
	return function(input, limit) {
		
		var finalText = "";
		var text2 = input.replace(/\s+/g, ' ');
		var text3 = text2.split(' ');
		var numberOfWords = text3.length;
		var i=0;
		if(numberOfWords > limit)
		{
		for(i=0; i< limit; i++)
		finalText = finalText+" "+ text3[i]+" ";

		return finalText+"...";
		}
		else return input;
	}
})