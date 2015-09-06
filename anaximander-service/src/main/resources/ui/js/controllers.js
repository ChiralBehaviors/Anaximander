var anaximanderControllers = angular.module('anaximanderControllers',
		[ 'jsonFormatter' ]);

anaximanderControllers.controller('JourneysControl', [
		'$scope',
		'Journeys']);

anaximanderControllers.controller('JourneyDetailControl', [
		'$scope',
		'$routeParams',
		'Journeys',
		function($scope, $routeParams, Journeys) {
			Journeys.instance($routeParams.instance).get().then(
					function(journey) {
						$scope.journey = journey.plain();
					});
		} ]);