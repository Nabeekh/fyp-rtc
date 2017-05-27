function AdminCtrl($scope, $state, $http, ModalService, $cookies) {
	$scope.initalizer = function(){
	$http.get('/users.json').then(function(res){
			$scope.users = res.data.users
			console.log($scope.users);
		
	});
  $http.get('/packages').then(function(res){
    $scope.packages = res.data
    console.log($scope.packages);
  })

	};
	$scope.initalizer();

	$scope.userCount = function(){
		return $scope.users.length;
	}
	$scope.viewUsers = function() {
    ModalService.showModal({
      templateUrl: "/assets/angular/templates/view-user.html",
      controller: "viewUserCtrl",
      inputs:{
      	Users: $scope.users
      }
    }).then(function(modal) {
      modal.element.modal({});
      modal.close.then(function(result) {
      });
    });

  };
  $scope.quickUser = function() {
  	ModalService.showModal({
  		templateUrl: "/assets/angular/templates/quick-user.html",
  		controller: "viewUserCtrl",
  		inputs:{
  			Users: null
  		}
  	}).then(function(modal) {
  		modal.element.modal({});
  		modal.close.then(function(result) {
  			if(result){
  				$scope.users.push(result);
  			}
  			$('.modal-backdrop').remove();
  			$('body').removeClass('modal-open');
  		});
  	});
  };
    $scope.quickBlog = function() {
  	ModalService.showModal({
  		templateUrl: "/assets/angular/templates/quick-blog.html",
  		controller: "quickBlogCtrl"
  	}).then(function(modal) {
  		modal.element.modal({});
  		modal.close.then(function(result) {
  			$('.modal-backdrop').remove();
  			$('body').removeClass('modal-open');
  		});
  	});

  };
  $scope.reservedPackages = function() {
    ModalService.showModal({
      templateUrl: "/assets/angular/templates/reserved-package.html",
      controller: "reservedPackCtrl",
      inputs: {
        packages: $scope.packages
      }
    }).then(function(modal) {
      modal.element.modal({});
      modal.close.then(function(result) {
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
      });
    });

  };
  $scope.Findone = function() {
    ModalService.showModal({
      templateUrl: "/assets/angular/templates/quick-search-package.html",
      controller: "searchPackageCtrl"
    }).then(function(modal) {
      modal.element.modal({});
      modal.close.then(function(result) {
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
      });
    });

  };
  $scope.deliverdModal = function() {
    ModalService.showModal({
      templateUrl: "/assets/angular/templates/admin-delivered.html",
      controller: "deliverdCtrl",
      inputs:{
        packages: $scope.packages
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
myApp.controller('AdminCtrl', AdminCtrl);
AdminCtrl.$inject = ['$scope', '$state', '$http', 'ModalService', '$cookies'];