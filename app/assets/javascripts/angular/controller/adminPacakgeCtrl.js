function AdminPackageCtrl($scope, $state, $http) {
	$scope.initalizer = function(){
		$http.get('/packages').then(function(res){
			$scope.packages = res.data
		});

	};
	$scope.initalizer();
};
myApp.controller('AdminPackageCtrl', AdminPackageCtrl);
AdminPackageCtrl.$inject = ['$scope', '$state', '$http'];