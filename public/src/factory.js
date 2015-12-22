angular.module('ExchangeApp')
	.factory('exchangedata',function($resource){
		return $resource('/exchangedata',{
		'get':{method:'GET'}	
		});
	});
