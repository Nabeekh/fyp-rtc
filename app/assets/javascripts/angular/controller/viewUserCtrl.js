function viewUserCtrl($scope, $state, $http, Users, close) {
	$scope.initalizer = function(){
		$scope.users = Users;
		$scope.user = {};
	};
	$scope.initalizer();
		$scope.submitReg = function(){
		$http.post('/users' , {user: $scope.user});
		close($scope.user);
	};
};
myApp.controller('viewUserCtrl', viewUserCtrl);
viewUserCtrl.$inject = ['$scope', '$state', '$http', 'Users', 'close'];