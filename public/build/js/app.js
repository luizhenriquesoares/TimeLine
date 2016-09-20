angular.module('app',
    ['app.controllers', 'app.services']);

angular.module('app.controllers', []);
angular.module('app.services', ['ngResource'])

.constant('appConfig', {
    baseUrl: 'http://vagalumewifi.com.br/timeline.json'
})

.config(function ($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/login',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
});
