function ConfirmCtrl($scope, $state, close , package, toastr) {
	$scope.initalizer = function(){
		$scope.package = package;
		$scope.radio = '';
		$scope.paymeth = false;

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