(function() {

	var anaximander = angular.module('anaximander', [ 'ngRoute', 'myApp']);


	anaximander.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/journey', {
			templateUrl : 'MasterDetailDemo.html',
			controller : 'JourneyMasterDetailCtrl'
		}).otherwise({
			redirectTo : '/journey'
		});
	} ]);

})();