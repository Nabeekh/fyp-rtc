function userPackSearchCtrl($scope, $http, package) {
	$scope.initalizer = function(){
		$scope.package = package;
	};
	$scope.initalizer();
};
myApp.controller('userPackSearchCtrl', userPackSearchCtrl);
userPackSearchCtrl.$inject = ['$scope', '$http', 'package'];