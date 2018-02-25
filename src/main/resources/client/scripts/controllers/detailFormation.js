angular.module('frontApp')
.controller('DetailFormationCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getFormationById = function() {
		$http.get('http://localhost:8085/formation/'+$routeParams.id).
        then(function(response) {
            $scope.frm = response.data;
        });
	}
    
	$scope.getFormationById();
}]);