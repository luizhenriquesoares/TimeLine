'use strict';

angular.module('app.controllers')
    .controller('TimeLineCtrl', ['$scope','TimeLine', '$resource','appConfig', function($scope, TimeLine, $resource, appConfig){
        $scope.data = [];

        TimeLine.query({}, function(data){
            $scope.data = data;
        }, function(error){

        });

    }]);
