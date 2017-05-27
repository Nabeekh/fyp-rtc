function ArticleCtrl($scope, WelcomeService, articles , $http) {
		$scope.clear = function(){
    $scope.title = '';
    $scope.text = '';
    
};
	$scope.initalizer = function(){
		$scope.articles = articles || [];
		$scope.list = true;
	};
	$scope.initalizer();

	$scope.submitArticle = function(){
		var article = {title: $scope.title , text: $scope.text}
		WelcomeService.submitArticle($scope.title ,$scope.text);
		$scope.articles.push(article);
		$scope.clear();
		$scope.list = true;
		$scope.NewBlog =false;

	};
	$scope.deletearticle = function(id, index){

     $http.delete("/articles/"+id).then(function(res){
     	$scope.articles.splice(index, 1);
     });

	}
	$scope.CreateBlog = function(){
		$scope.list = false;
		$scope.NewBlog =true;
	}
	$scope.cancelBlog = function(){
		$scope.list = true;
		$scope.NewBlog =false;

	}
	$scope.editArticle = function(article){
		$scope.article = {};
		$scope.article = article;
		$scope.list=false;
		$scope.EditBlog = true;
	}
	$scope.submiteditArticle = function(index){
		$http.put('/articles/'+$scope.article.id , {title: $scope.article.title
			,
			text: $scope.article.text}).then(function(res){
				if(res){
					$scope.articles[index] = $scope.article;
				}
			});
			$scope.cancelEdit();
	}
	$scope.cancelEdit = function(){
		$scope.article = {};
		$scope.list = true;
		$scope.EditBlog = false;
	}
};
myApp.controller('ArticleCtrl', ArticleCtrl);
ArticleCtrl.$inject = ['$scope', 'WelcomeService', 'articles', '$http'];