'use strict';

angular.module('app.controllers',[]);
angular.module('app.services', []);
angular.module('app.filters', []);

angular.module('app',['app.controllers', 'app.filters', 'app.services', 'ui.router', 'ngResource'])

.constant('appConfig', {
    baseUrl: 'http://localhost:8000'
})

.config(['$stateProvider',function ($stateProvider) {

    $stateProvider
        .state('timeline', {
            url: '/home',
            templateUrl: 'build/views/home.html',
            controller: 'TimeLineCtrl'
        });
}]);
