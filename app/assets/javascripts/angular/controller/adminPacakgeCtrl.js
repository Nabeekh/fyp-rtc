function AdminPackageCtrl($scope, $state, $http, ModalService) {
	$scope.initalizer = function(){
		$http.get('/packages').then(function(res){
			$scope.packages = res.data
		});

	};
	$scope.initalizer();
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
};
myApp.controller('AdminPackageCtrl', AdminPackageCtrl);
AdminPackageCtrl.$inject = ['$scope', '$state', '$http', 'ModalService'];