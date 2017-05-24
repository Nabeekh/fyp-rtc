function welcomeCtrl($scope , ModalService, $state) {
	$scope.initalizer = function(){
	};
	$scope.initalizer();
	$scope.signIn = function() {
		console.log()
    ModalService.showModal({
      templateUrl: "/assets/angular/templates/signin.html",
      controller: "sessionCtrl"
    }).then(function(modal) {
      modal.element.modal({});
      modal.close.then(function(result) {
      });
    });

  };
};
myApp.controller('welcomeCtrl', welcomeCtrl);
welcomeCtrl.$inject = ['$scope', 'ModalService', '$state'];