/**
 * Created by Lorena on 6/24/2016.
 */

angular.module('hrApp').controller('MainController',['$rootScope','$scope', function($rootScope,$scope){
    $scope.name="";
    console.log($scope.name);
    // alert($scope.name);
}]);