function deliverdCtrl($scope,  $http, close, packages, toastr) {
	$scope.initalizer = function(){
		$scope.showlist = true;
		$scope.packages = [];
		$scope.allPackages = packages;
		 angular.forEach($scope.allPackages, function (pack) {
			if(pack.status == 'Deliverd' || pack.status == 'deliverd')	{
				$scope.packages.push(pack);
			}			
			});

	};
	$scope.initalizer();
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
};
myApp.controller('deliverdCtrl', deliverdCtrl);
deliverdCtrl.$inject = ['$scope', '$http', 'close', 'packages', 'toastr'];