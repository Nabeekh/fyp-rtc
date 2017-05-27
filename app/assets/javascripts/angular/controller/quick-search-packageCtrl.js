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