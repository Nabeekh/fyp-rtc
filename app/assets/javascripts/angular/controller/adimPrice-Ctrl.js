function AdminPriceCtrl($scope, $state) {
	$scope.initalizer = function(){
		$scope.data = {};
		$scope.searchfrom = true;
	};
	$scope.initalizer();
		$scope.priceCalculate = function(){
		if($scope.data.from !== $scope.data.to){
			if($scope.data.to == 'karachi'){
				$scope.fare = 150 + 250 + $scope.data.weight*70;
			}else{
				$scope.fare = 150 + $scope.data.weight*70;
			}
		}else{
				$scope.fare = 100 + $scope.data.weight*70;
		}
		$scope.costform = true;
		$scope.searchfrom = false;
	};
	$scope.showSearchFrom = function(){
		$scope.costform = false;
		$scope.searchfrom = true;
		$scope.data = {};
	};
};
myApp.controller('AdminPriceCtrl', AdminPriceCtrl);
AdminPriceCtrl.$inject = ['$scope', '$state'];