function sessionCtrl($scope, ModalService, $state, $http, close) {
	$scope.initalizer = function(){
		$scope.adminuser = "asim";
		$scope.pass = "12345678";
		$scope.data = {};
		$scope.signin = true;
		$scope.user = {};
	};
	$scope.initalizer();
	$scope.login = function(){
		 if($scope.data.email == $scope.adminuser && $scope.data.password == $scope.pass){
			$state.go('admin');
			close();
		}else{
			$http.post('/users/signIn', {user: $scope.data}).then(function(res){
				if(res.data.email){
					$state.go('User');
					close();
				}else{
					close();
				}
			});
		}
	}
	$scope.signup = function (){
		$scope.signin =false;
		$scope.reg = true;
	};
	$scope.log = function(){
		$scope.signin =true;
		$scope.reg = false;
	};
	$scope.submitReg = function(){
		console.log($scope.user);
		$http.post('/users' , {user: $scope.user});
	};
	$scope.register = function (){
	};
};
myApp.controller('sessionCtrl', sessionCtrl);
sessionCtrl.$inject = ['$scope','ModalService', '$state', '$http', 'close'];