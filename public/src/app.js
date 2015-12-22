angular.module('ExchangeApp',['ngRoute','ngResource'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider
			.when('/exchangedata',{
				controller:'ListController',
				templateUrl:'views/list.html'
			});
		$locationProvider.html5Mode(true);
	})
	.run(function($rootScope){
		$rootScope.message="Hello Angular!";
	});
