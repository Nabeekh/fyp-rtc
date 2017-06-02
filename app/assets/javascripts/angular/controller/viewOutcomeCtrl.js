
function viewOutcomeCtrl($scope, $http,  $state, package) {
	$scope.initalizer = function(){
		$scope.package = package;
		$http.get('/packages/'+$scope.package.id+'/outcomes').then(function(response){
			$scope.report = response.data;
		});
	};
	$scope.initalizer();
};
myApp.controller('viewOutcomeCtrl', viewOutcomeCtrl);
viewOutcomeCtrl.$inject = ['$scope', '$http','$state', 'package'];