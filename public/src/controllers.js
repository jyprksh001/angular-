angular.module('ExchangeApp')
	.controller('ListController',function($scope){

		$scope.fields=['Curr_codes','ibr','Uae','Saraf','Al Ansari','Wsec','Margin Uae','Margin Saraf','Margin Ansari','Margin Wsec'];
		$scope.sort=function(field){
			$scope.sort.field=field;
			$scope.sort.order=!$scope.sort.order;
		};
		$scope.sort.field='Curr_codes'
		$scope.sort.order=false;
	})
	.controller('ListControllerRows',function($scope,$http){
		$http.get("http://localhost:3000/exchangedata").then(function (response) 
			{$scope.data = response.data});
	});
