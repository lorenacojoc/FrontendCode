hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";


        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];
        $scope.employee = {};

        //TODO #HR5
        $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
            .success(function(data, status) {
                $scope.departments = data;
            })
            .error (function(data, status) {
                alert("Error: " + status);
            })

        $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
            .success(function(data, status) {
                $scope.jobs = data;
            })
            .error (function(data, status) {
                alert("Error: " + status);
            })

        $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
            .success(function(data, status) {
                $scope.managers = data;
            })
            .error (function(data, status) {
                alert("Error: " + status);
            })

        $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeId)
            .success(function(data, status) {
                $scope.employee = data;
            })
            .error (function(data, status) {
                alert("Error: " + status);
            })
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };



        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);