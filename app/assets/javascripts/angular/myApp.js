var myApp = angular.module('myApp', ['ui.router', 'angularModalService']);
myApp.config(["$provide", function ($provide) {  $provide.value("$apiRoot", "/");}]);

