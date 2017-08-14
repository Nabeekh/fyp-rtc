function sessionCtrl($scope, ModalService, $state, $http, close, $cookies, toastr) {
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
			if($scope.data.email == '' && $scope.data.password == ''){
				toastr.error('Please provide Email and password!');
			}else{
				$http.post('/users/signIn', {user: $scope.data}).then(function(res){
					if(res.data.email){
						$cookies.put('user',JSON.stringify( res.data));
						toastr.info('Login success! Welcome to RTC');
						close();
						$state.go('User');
					}else{
						toastr.error('User not found! try again');
					}
				});
			}

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
		$http.post('/users' , {user: $scope.user}).then(function(res){
		toastr.success('Register successful! Please login to continue');
		})
	};
	$scope.register = function (){
	};
};
myApp.controller('sessionCtrl', sessionCtrl);
sessionCtrl.$inject = ['$scope','ModalService', '$state', '$http', 'close','$cookies', 'toastr'];