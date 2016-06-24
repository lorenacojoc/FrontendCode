/**
 * Created by Lorena on 6/24/2016.
 */

angular.module('hrApp').controller('OtherController',['$scope',function($scope){

    $scope.title = "Two Way Binding Demo";
   function setTitle()
   {
       $scope.title = "New Title";
   }
}]);