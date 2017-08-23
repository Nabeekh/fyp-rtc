function ConfirmCtrl($scope, $state, close , package, toastr) {
	$scope.initalizer = function(){
		$scope.package = package;
		$scope.radio = '';
		$scope.paymeth = false;
		$scope.times = ["2 days", "1 day", "3 days"];
		$scope.trains = ["badar express", "zawar express", "quetta Mall", "Badar Express"];
		$scope.randTrain = $scope.trains[Math.floor(Math.random() * $scope.trains.length)];
		$scope.randTime = $scope.times[Math.floor(Math.random() * $scope.times.length)];

		$scope.paymentMethods=[
		{name: 'Jazz cash'},
		{name: 'Omni'},
		{name: 'VISA'},
		{name: 'MASTER'}
		];
	};
	$scope.initalizer();
	$scope.confirm = function(){
		if($scope.radio == 'later'){
			close('y');
		}else{
			toastr.error('Please select A  Valid payment method!');
		}
	};
	$scope.viewForm = function(){
		$scope.paymeth = true;
	}
	$scope.cancel = function(){
		close('N');
	}
	
};
myApp.controller('ConfirmCtrl', ConfirmCtrl);
ConfirmCtrl.$inject = ['$scope', '$state', 'close' , 'package', 'toastr'];