angular.module('frontApp')
.controller('DetailEnseignantCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getEnseignantById = function() {
		$http.get('http://localhost:8085/enseignant/'+$routeParams.id).
        then(function(response) {
            $scope.ens = response.data;
        });
	}
    
	$scope.getEnseignantById();
}]);