/**
 * Created by Lorena on 6/24/2016.
 */

angular.module('hrApp').controller('DescriptionController',['$scope', function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    
    $scope.descriptionShow = true;
    $scope.descriptionHide = false;

    $scope.toggleDescriptionShow = function(){
        var elem = document.getElementById("myDesc");
        if(elem.style.display == 'none'){
            elem.style.display = 'block';

        } else {
            elem.style.display = 'none';
        }
    };

}]);