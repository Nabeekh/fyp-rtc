function BaseCtrl($scope, $state,  $http, $cookies) {
	$scope.initalizer = function(){

	};
	$scope.initalizer();
	
};
myApp.controller('BaseCtrl', BaseCtrl);
BaseCtrl.$inject = ['$scope', '$state', '$http', '$cookies'];