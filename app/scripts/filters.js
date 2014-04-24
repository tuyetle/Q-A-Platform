var filterModule = angular.module('filters', []);

filterModule.filter('smartDateTime', function($filter) {
	return function (objDate) {
		
		var curDate = new Date(),
			curDay = $filter('date')(curDate, 'yyyy-MM-dd'),
			curTime = $filter('date')(curDate, 'hh:mm'),
			curHour = $filter('date')(curDate, 'hh'),
			curMinutes = $filter('date')(curDate, 'mm'),
			objDay = $filter('date')(objDate, 'yyyy-MM-dd'),
			objTime = $filter('date')(objDate, 'hh:mm'),
			objHour = $filter('date')(objDate, 'hh'),
			objMinutes = $filter('date')(objDate, 'mm');
			
		if ( objDay == curDay ) {
		
			if ( objHour == curHour ) {
				
				if ( objMinutes == curMinutes ) {
				
					return 'just seconds ago';
				
				}
				
				return 'just minutes ago';
			}
			
			return 'today ' + objTime;
		}
		
		return $filter('date')(objDate, 'yyyy-MM-dd hh:mm');
		
	};
})