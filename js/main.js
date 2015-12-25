var app = angular.module('app', []);
app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.round = function (x) {
        return Math.round(x*100)/100;
    };
    $scope.lt = function (x,y) {
        return x < y;
    }
    $scope.isNaN = function (x) {
        return isNaN(x);
    }
}]);
