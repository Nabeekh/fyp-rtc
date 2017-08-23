function userPackageCtrl($scope, $state, $http, $cookies, toastr , ModalService) {
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
		$scope.package = {};
		$scope.package.station = "555";

	};
	$scope.initalizer();

	$scope.submitPackage = function(){
			$scope.package.price = $scope.priceCalculate();
			$scope.package.status = 'Booked';
			$scope.package.trackId = Math.floor((Math.random()*92)+1);
			$http.post('/users/'+$scope.user.id+'/packages' , {package: $scope.package}).then(function(respose){
				$scope.packages.push(respose.data);
				toastr.info('package Booked successfully');
				$scope.showList();
				$scope.package = {};
			});
		

	};
	$scope.Confirmation = function() {
		if($scope.validForm() == true){
			$scope.package.price = $scope.priceCalculate();
			ModalService.showModal({
				templateUrl: "/assets/angular/templates/confirm-package.html",
				controller: "ConfirmCtrl",
				inputs:{
					package: $scope.package
				}
			}).then(function(modal) {
				modal.element.modal({});
				modal.close.then(function(result) {
					if(result == 'y'){
						$scope.submitPackage();
					}else{
						toastr.error('You have canceld Package submission');
						$state.go('User-package');
					}
					$('.modal-backdrop').remove();
					$('body').removeClass('modal-open');
				});
			});
		}else{
			toastr.error("Please fill form corectly!");
		}

	};
	$scope.showOutcome = function(pack) {
		ModalService.showModal({
			templateUrl: "/assets/angular/templates/admin-outcome.html",
			controller: "viewOutcomeCtrl",
			inputs: {
				package: pack
			}
		}).then(function(modal) {
			modal.element.modal({});
			modal.close.then(function(result) {
				$('.modal-backdrop').remove();
				$('body').removeClass('modal-open');
			});
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

	$scope.validForm = function(){
		if($scope.package.sender == undefined || $scope.package.city == undefined || $scope.package.weight == undefined || $scope.package.receiver == undefined || $scope.package.address == undefined){
			return false;
		}else{
			return true;	
		}
	};
};
myApp.controller('userPackageCtrl', userPackageCtrl);
userPackageCtrl.$inject = ['$scope', '$state', '$http', '$cookies', 'toastr', 'ModalService'];