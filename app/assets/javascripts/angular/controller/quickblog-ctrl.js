function quickBlogCtrl($scope, WelcomeService, $http, close) {
	$scope.initalizer = function(){
	$scope.title = '';
    $scope.text = '';
	};
	$scope.initalizer();

	$scope.submitArticle = function(){
		var article = {title: $scope.title , text: $scope.text}
		WelcomeService.submitArticle($scope.title ,$scope.text);
		close();

	};
};
myApp.controller('quickBlogCtrl', quickBlogCtrl);
quickBlogCtrl.$inject = ['$scope', 'WelcomeService','$http', 'close'];