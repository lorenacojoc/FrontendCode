/**
 * Created by Lorena on 6/24/2016.
 */

angular.module('hrApp').controller('DescriptionController',['$scope', function($scope){
    
   $scope.demoActionlist = [
       {
           label: "OtherScope"
           url: "views/childscope.html"
       }
   ]; 
    
}]);