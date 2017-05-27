function userProfileCtrl($scope, $state, $http, $cookies, toastr) {
	$scope.initalizer = function(){
		$scope.user = JSON.parse($cookies.get('user'));
	};
	$scope.initalizer();
	$scope.updateInfo = function (){
		$http.put(/users/+$scope.user.id, {user: $scope.user}).then(function(response){
			toastr.info('Updated Your Profile');
			$cookies.put('user',JSON.stringify($scope.user));
		});
	}
};
myApp.controller('userProfileCtrl', userProfileCtrl);
userProfileCtrl.$inject = ['$scope', '$state', '$http', '$cookies', 'toastr'];