function blogCtrl($scope, WelcomeService, articles , $http) {
		$scope.clear = function(){
    $scope.title = '';
    $scope.text = '';
    
};
	$scope.initalizer = function(){
		$scope.articles = articles || [];
	};
	$scope.initalizer();
};
myApp.controller('blogCtrl', blogCtrl);
blogCtrl.$inject = ['$scope', 'WelcomeService', 'articles', '$http'];