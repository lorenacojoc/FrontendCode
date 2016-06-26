/**
 * Created by Lorena on 6/25/2016.
 */

angular.module('hrApp').controller('demoMathController',['$scope', function($scope){
    $scope.numberA = "";
    $scope.numberB = "";
    $scope.sum = "";
    $scope.mul = "";
    $scope.div = "";
    $scope.dif = "";
    
    $scope.addition = function() {
        $scope.sum = parseInt($scope.numberA) + parseInt($scope.numberB);
    };

    $scope.substraction = function() {

        $scope.dif = parseInt($scope.numberA) - parseInt($scope.numberB);
    };

    $scope.division = function() {

        $scope.div = parseInt($scope.numberA) / parseInt($scope.numberB);
    };

    $scope.multiplication = function() {

        $scope.mul = parseInt($scope.numberA) * parseInt($scope.numberB);
    };
   
}]);