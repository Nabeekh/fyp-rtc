function userHomeCtrl($scope, $state,$cookies) {
	$scope.initalizer = function(){
		var user = JSON.parse($cookies.get('user'));
		console.log(user);
	};
	$scope.initalizer();
};
myApp.controller('userHomeCtrl', userHomeCtrl);
userHomeCtrl.$inject = ['$scope', '$state','$cookies'];