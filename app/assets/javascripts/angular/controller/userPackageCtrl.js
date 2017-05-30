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
		$scope.package.price = $scope.priceCalculate();
		$scope.package.status = 'Booked';
		$scope.package.trackId = Math.floor((Math.random()*92)+1);
		$http.post('/users/'+$scope.user.id+'/packages' , {package: $scope.package}).then(function(respose){
			$scope.packages.push(respose.data);
			toastr.info('package Submitted successfully');
			$scope.showList();
			$scope.package = {};
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
	$scope.priceCalculate = function(){
		if($scope.user.cty !== $scope.package.city){
			if($scope.package.city == 'karachi'){
				$scope.fare = 150 + 250 + $scope.package.weight*71;
			}else{
				$scope.fare = 150 + $scope.package.weight*70;
			}
		}else{
				$scope.fare = 100 + $scope.package.weight*70;
		}
		return $scope.fare;
	};
};
myApp.controller('userPackageCtrl', userPackageCtrl);
userPackageCtrl.$inject = ['$scope', '$state', '$http', '$cookies', 'toastr'];