angular.module('docsSimpleDirective',[])
.controller('Ctrl',function($scope){
	$scope.customer = {
		name:"孟志昂",
		address:"123123123123"
	};
})
.directive('hello',function(){
	return {
		restrict:'E',
		template:'<div>Hi there</div>',
		replace:true
	};
});