var appModule = angular.module('app', []);

appModule.directive('hello', function() {
            return {
                restrict : 'E',
                template : '<div>Hi here <span ng-transclude></span></div>',
                replace:true,// �Ƿ��滻������ǩ
                transclude : true
            };
        });