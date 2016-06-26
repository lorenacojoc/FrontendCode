/**
 * Created by Lorena on 6/24/2016.
 */

angular.module('hrApp').controller('OtherController',['$scope',function($scope){

    $scope.title = "Two Way Binding Demo";
    
    $scope.setTitle = function(val) {
        val = "New Title"
        $scope.title = val;
    };
}]);