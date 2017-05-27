function userPackageCtrl($scope, $state, $http, $cookies, toastr) {
	$scope.initalizer = function(){
		$scope.list = true;
		$scope.shownew =false;
		$scope.packages = [];
		$scope.user = JSON.parse($cookies.get('user'));
		$http.get('/users/'+$scope.user.id+'/packages' , {package: $scope.package}).then(function(respose){
			if(respose != null){
			$scope.packages = respose.data;
			}
		});
		$scope.pacakge = {};

	};
	$scope.initalizer();

	$scope.submitPackage = function(){
		$scope.package.price = $scope.calculatePrice();
		$scope.package.status = 'Booked';
		$scope.package.trackId = Math.floor((Math.random()*92)+1);
		$http.post('/users/'+$scope.user.id+'/packages' , {package: $scope.package}).then(function(respose){
			$scope.packages.push(respose.data);
			toastr.info('package Submitted successfully');
			$scope.showList();
		});
	};
	$scope.showNewForm = function(){
		$scope.shownew = true;
		$scope.list = false;
	};
	$scope.showList = function(){
		$scope.shownew = false;
		$scope.list = true;
	};
	 $scope.calculatePrice =function(){
	 	var cost = 0;
	 	cost = 150*$scope.package.weight;
	 	if($scope.package.city == 'karachi'){
	 		cost = cost + 288;
	 	}
	 	return cost

	 }
};
myApp.controller('userPackageCtrl', userPackageCtrl);
userPackageCtrl.$inject = ['$scope', '$state', '$http', '$cookies', 'toastr'];