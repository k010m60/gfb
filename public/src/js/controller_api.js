angular.module('Facts', [])


.controller('Fact', function ($scope, $http) {

    $scope.xxx = {};
    $http.get("/api/users")
    .then(function successCallback(response) {
        $scope.xxx = response.data;
        console.log($scope.xxx);
    }, function errorCallback(response) {
        $scope.xxx = response.data;
        console.log($scope.xxx);
    });
});