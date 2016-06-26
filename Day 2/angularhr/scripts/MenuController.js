/**
 * Created by Lorena on 6/24/2016.
 */

angular.module('hrApp').controller('MenuController',['$scope',function($scope){

    $scope.demoActionList = [
        {
            label: "OtherScope" ,
            url: "views/childscope.html"
        },
        {
            label: "DemoMath",
            url: "views/demomath.html"
        }
    ];

}]);