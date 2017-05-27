var myApp = angular.module('myApp', ['ui.router', 'angularModalService','ngCookies', 'toastr']);
myApp.config(["$provide", function ($provide) {  $provide.value("$apiRoot", "/");}]);

