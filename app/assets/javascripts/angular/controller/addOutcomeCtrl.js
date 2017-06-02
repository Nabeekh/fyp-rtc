function addOutcomeCtrl($scope, $state, package) {
	$scope.initalizer = function(){
		$scope.package = package;
	};
	$scope.initalizer();
	
};
myApp.controller('addOutcomeCtrl', addOutcomeCtrl);
addOutcomeCtrl.$inject = ['$scope', '$state' , 'package'];