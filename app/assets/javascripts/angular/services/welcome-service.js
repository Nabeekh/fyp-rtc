myApp.factory("WelcomeService", function($http, $q, $apiRoot){
	return{        
		list: function() {
			var url = $apiRoot + "articles.json";
			var defer = $q.defer();
			$http({
				method: 'GET',
				url: url,
			}).success(function (data, status, header, config) {
				defer.resolve(data.articles);            
			}).error(function (data, status, header, config) {
				defer.reject(data);            
			});            
			return defer.promise;        
		},
		submitArticle: function(title , text) {
			var url = $apiRoot + "articles";
			$http({
				url: url,
				dataType: 'json',
				method: 'POST',
				data: {
					title: title,
					text: text
				},
				headers: {
					"Content-Type": "application/json"
				}
			}).success(function(response){
				
			}).error(function(error){
				
			});
		}
	};
});