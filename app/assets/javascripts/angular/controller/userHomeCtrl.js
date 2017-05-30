function userHomeCtrl($scope, $state, $http, $cookies,toastr ,ModalService) {
	$scope.initalizer = function(){
		$scope.user = JSON.parse($cookies.get('user'));
		$scope.date = new Date();
		$scope.Bookpackages = [];
		$scope.deliverdPackages= [];
		$scope.spentCount = 0;
		$scope.searchfrom = true;
		$scope.data = {};
		$http.get('/users/'+$scope.user.id+'/packages').then(function(res){
			$scope.allPackages = res.data;
			$scope.allpackagecount = $scope.allPackages.length;
			$scope.recent = $scope.allPackages[0];
			angular.forEach($scope.allPackages, function (pack) {
				if(pack.status == 'booked' || pack.status == 'Booked')	{
					$scope.Bookpackages.push(pack);
				}
				else if(pack.status == 'Deliverd' || pack.status == 'deliverd'){
					$scope.deliverdPackages.push(pack);
				}
				$scope.spentCount = $scope.spentCount + pack.price;
		});
			$scope.bookedCount = $scope.Bookpackages.length;
			$scope.deliveredcount = $scope.deliverdPackages.length;
	});
};
	$scope.initalizer();
	$scope.searchPackage = function (){
		$http.post('/packages/search', {trackId : $scope.trackId}).then(function(response){
			$scope.package = response.data;
			if($scope.package.id){
				toastr.success('Record Found');
				$scope.viewPackage();
			}else{
				toastr.error('No Record Found');

			}
		})
	}
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
	$scope.viewPackage = function() {
		ModalService.showModal({
			templateUrl: "/assets/angular/templates/user-package-search.html",
			controller: "userPackSearchCtrl",
			inputs:{
				package: $scope.package
			}
		}).then(function(modal) {
			modal.element.modal({});
			modal.close.then(function(result) {
			});
		});

	};
};
myApp.controller('userHomeCtrl', userHomeCtrl);
userHomeCtrl.$inject = ['$scope', '$state','$http', '$cookies', 'toastr', 'ModalService'];