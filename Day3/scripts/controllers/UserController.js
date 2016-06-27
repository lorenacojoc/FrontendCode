/**
 * Created by Lorena on 6/27/2016.
 */

hrApp.controller('UserController', ['$scope','$location', function($scope,$location) {

    $scope.users = [];
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.ID = "";
    $scope.age = "";

    $scope.back = function(){
        $location.url('/');
    }

    $scope.reset = function(){
        $scope.firstName = null;
        $scope.lastName = null;
        $scope.ID = null;
        $scope.age = null;
    }


    $scope.save = function(){
       
    }

    $scope.show_hide = function(){

    }


}]);