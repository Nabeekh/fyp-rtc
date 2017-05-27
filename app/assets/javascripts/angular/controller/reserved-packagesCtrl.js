function reservedPackCtrl($scope,  $http, close, packages, toastr) {
	$scope.initalizer = function(){
		$scope.showlist = true;
		$scope.packages = [];
		$scope.allPackages = packages;
		 angular.forEach($scope.allPackages, function (pack) {
			if(pack.status == 'booked' || pack.status == 'Booked')	{
				$scope.packages.push(pack);
			}			
			});

	};
	$scope.initalizer();

	$scope.editPackage = function(pack,index){
		$scope.package = pack;
		$scope.shownew = true;
		$scope.showlist = false;
		$scope.packageIndex = index;

	};
	$scope.statuses = [
	{name: 'approved',
	id: 1},
	{name: 'not Approved',
	id: 2},
	{name: 'sent',
	id:3},
	{name: 'Travel',
	id:4},
	{name: 'Deliverd',
	id:5}
	];
	$scope.showListPage = function(){
		$scope.shownew = false;
		$scope.showlist = true;
	};
	$scope.updatePackage = function(){
      $scope.package.status = $scope.package.newStatus;
    	$http.put('/packages/'+$scope.package.id , {package: $scope.package}).then(function(res){
    		if(res.data){
    			$scope.packages[$scope.packageIndex] = angular.copy($scope.package);
    			toastr.info('Status Updated!');
    			$scope.showListPage();
    		}
    	})

    };
};
myApp.controller('reservedPackCtrl', reservedPackCtrl);
reservedPackCtrl.$inject = ['$scope', '$http', 'close', 'packages', 'toastr'];