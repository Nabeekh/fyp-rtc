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
		$scope.outcome = false;
	};
	$scope.Addreport = function(){
		if($scope.package.newStatus === 'not Approved'){
			$scope.shownew = false;
			$scope.outcome =true;
			$scope.noAproval =true;
		}else if($scope.package.newStatus === 'Deliverd'){
			$scope.shownew = false;
			$scope.outcome = true;
			$scope.delivery = true;
		}
	};
	$scope.submitreport = function (){
		$scope.package.status = $scope.package.newStatus;
		$http.put('/packages/'+$scope.package.id , {package: $scope.package}).then(function(res){
			if(res.data){
				$scope.packages.splice($scope.packageIndex ,1)
				toastr.info('Status Updated!');
				if($scope.report.received_by != null && $scope.report.receiver_cinc != null){
				$http.post('/packages/'+$scope.package.id+'/outcomes', {outcome: $scope.report});
				toastr.info('Report Added');
				$scope.showListPage ();
				}else if($scope.report.description != null){
					$http.post('/packages/'+$scope.package.id+'/outcomes', {outcome: $scope.report});
					toastr.info('Report Added');
					$scope.showListPage ();
				}else{
					toastr.error('Please fill Report fields');
				}

			}
		});
	};
	$scope.updatePackage = function(){
      $scope.package.status = $scope.package.newStatus;
    	$http.put('/packages/'+$scope.package.id , {package: $scope.package}).then(function(res){
    		if(res.data){
    			$scope.packages.splice($scope.packageIndex ,1)
    			toastr.info('Status Updated!');
    			$scope.showListPage();
    		}
    	})

    };

};
myApp.controller('reservedPackCtrl', reservedPackCtrl);
reservedPackCtrl.$inject = ['$scope', '$http', 'close', 'packages', 'toastr'];