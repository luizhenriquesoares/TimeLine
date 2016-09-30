angular.module('app.services')
    .factory('TimeLine', ['$resource', 'appConfig', function($resource, appConfig){
        return $resource(appConfig.baseUrl + '/api/client/json', {}, {
            query: {
                isArray: true
            }
        });
    }]);
