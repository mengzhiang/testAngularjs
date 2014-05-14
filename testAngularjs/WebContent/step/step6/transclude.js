var appModule = angular.module('app', []);

appModule.directive('hello', function() {
            return {
                restrict : 'E',
                template : '<div>Hi here <span ng-transclude></span></div>',
                replace:true,// 是否替换最外层标签
                transclude : true
            };
        });