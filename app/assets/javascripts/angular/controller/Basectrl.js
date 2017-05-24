function BaseCtrl($scope, $state) {
	$scope.initalizer = function(){
	};
	$scope.initalizer();
	
};
myApp.controller('BaseCtrl', BaseCtrl);
BaseCtrl.$inject = ['$scope', '$state'];