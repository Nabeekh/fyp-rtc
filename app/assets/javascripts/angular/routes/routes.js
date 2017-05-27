myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise('/welcome');
	$stateProvider
	.state("articles", {
		parent: 'index',
		url: '/Admin-Blog',
		templateUrl: '/assets/angular/templates/admin-blog.html',
		controller : 'ArticleCtrl',
		resolve:{
			articles: function(WelcomeService){
				return WelcomeService.list();
			}
		}
	})
	.state('index', {
		abstract: true,
		templateUrl: '/assets/angular/templates/header.html'
	})
	.state('userindex', {
		abstract: true,
		templateUrl: '/assets/angular/templates/userindex.html'
	})
	.state("/users/sign_in", {
		url: '/users/sign_in',
		templateUrl: '/assets/angular/templates/signin.html',
		controller : 'sessionCtrl'
	})
	.state("welcome", {
		url: '/welcome',
		templateUrl: '/assets/angular/templates/welcome.html',
		controller : 'welcomeCtrl'
	})
	.state("admin", {
		parent: 'index',
		url: '/admin-home',
		templateUrl: '/assets/angular/templates/admin.html',
		controller : 'AdminCtrl'
	})
	.state("admin-pricing", {
		parent: 'index',
		url: '/admin-pricing',
		templateUrl: '/assets/angular/templates/admin-price.html',
		controller : 'AdminPriceCtrl'
	})
	.state("about", {
		parent: 'index',
		url: '/about',
		templateUrl: '/assets/angular/templates/about.html'
	})
	.state("admin-pacakages", {
		parent: 'index',
		url: '/admin-Packages',
		templateUrl: '/assets/angular/templates/admin-pacakage.html',
		controller : 'AdminPackageCtrl'

	})
	.state("User", {
		parent: 'userindex',
		url: '/user-home',
		templateUrl: '/assets/angular/templates/user-home.html',
		controller: 'userHomeCtrl'

	})
	.state("User-package", {
		parent: 'userindex',
		url: '/user-package',
		templateUrl: '/assets/angular/templates/user-pacakage.html',
		controller: 'userPackageCtrl'

	})
	.state("User-profile", {
		parent: 'userindex',
		url: '/user-profile',
		templateUrl: '/assets/angular/templates/profile.html',
		controller: 'userProfileCtrl'

	})
	.state("User-about", {
		parent: 'userindex',
		url: '/about-system',
		templateUrl: '/assets/angular/templates/about.html'
	})
	.state("User-blog", {
		parent: 'userindex',
		url: '/blog',
		templateUrl: '/assets/angular/templates/blog.html',
		controller: 'blogCtrl',
		resolve:{
			articles: function(WelcomeService){
				return WelcomeService.list();
			}
		}

	})
}]);
