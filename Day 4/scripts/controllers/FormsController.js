/**
 * Created by Lorena on 6/28/2016.
 */

hrApp.controller('FormsController',['$scope', function($scope){

    $scope.userType = "";
    $scope.show = function(){
        if ($scope.myForm.$valid == true)
        {
            window.alert("Valid");
        }
        else {
            window.alert("invalid");
        }

    }
}]);