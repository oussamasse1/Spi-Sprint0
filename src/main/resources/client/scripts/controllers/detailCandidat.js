angular.module('frontApp')
.controller('DetailCandidatCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getCandidatById = function() {
		$http.get('http://localhost:8085/candidat/'+$routeParams.id).
        then(function(response) {
            $scope.can = response.data;
        });
	}
    
	$scope.getCandidatById();
}]);