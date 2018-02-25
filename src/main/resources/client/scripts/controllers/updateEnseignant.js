angular.module('frontApp')
.controller('UpdateEnseignantCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    
    $scope.getEnseignantById = function() {
		$http.get('http://localhost:8085/enseignant/'+$routeParams.id).
        then(function(response) {
            $scope.ens = response.data;
            
            console.log($scope.ens);
        });
	}
	
	
	
    $scope.getEnseignantById();
    
    $scope.updateEnseignant = function() {
     	$http.put('http://localhost:8085/enseignant/',$scope.ens)
     	.then(function(response) {
	            $scope.ens =response.data;
	        });
      }
}]);