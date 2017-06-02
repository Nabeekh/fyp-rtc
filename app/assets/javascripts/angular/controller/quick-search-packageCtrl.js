function searchPackageCtrl($scope,  $http, close, toastr) {
	$scope.initalizer = function(){
		$scope.search = true;
		$scope.trackId = '';
		$scope.package = {};
	};
	$scope.initalizer();

	$scope.searchpackage = function(){
		$http.post('/packages/search', {trackId : $scope.trackId}).then(function(response){
			$scope.package = response.data;
			if($scope.package.id){
				$scope.search = false;
				$scope.showone = true;
				toastr.success('Record Found');
			}else{
				toastr.error('No Record Found');

			}
		})

	};
	$scope.Addreport = function(){
		if($scope.package.newStatus === 'not Approved'){
			$scope.showone = false;
			$scope.outcome =true;
			$scope.noAproval = true;
		}else if($scope.package.newStatus === 'Deliverd'){
			$scope.showone = false;
			$scope.outcome = true;
			$scope.delivery = true;
		}
	};
	$scope.submitreport = function (){
		$scope.package.status = $scope.package.newStatus;
		$http.put('/packages/'+$scope.package.id , {package: $scope.package}).then(function(res){
			if(res.data){
				toastr.info('Status Updated!');
				if($scope.report.received_by != null && $scope.report.receiver_cinc != null){
					$http.post('/packages/'+$scope.package.id+'/outcomes', {outcome: $scope.report});
					toastr.info('Report Added');
					$scope.outcome =false;
					$scope.search = true;
				}else if($scope.report.description != null){
					$http.post('/packages/'+$scope.package.id+'/outcomes', {outcome: $scope.report});
					toastr.info('Report Added');
					$scope.outcome =false;
					$scope.search = true;
				}else{
					toastr.error('Please fill Report fields');
				}

			}
		});
	};
	$scope.updatePackage = function(){
		if($scope.package.newStatus != ''){
			$scope.package.status = $scope.package.newStatus;

		}
    	$http.put('/packages/'+$scope.package.id , {package: $scope.package}).then(function(res){
    		if(res.data){
    			toastr.info('Updated!');
    			$scope.search = true;
				$scope.showone = false;
    		}
    	})

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
	$scope.showSearchPage = function(){
		$scope.search = true;
		$scope.showone = false;
	}
};
myApp.controller('searchPackageCtrl', searchPackageCtrl);
searchPackageCtrl.$inject = ['$scope', '$http', 'close', 'toastr'];