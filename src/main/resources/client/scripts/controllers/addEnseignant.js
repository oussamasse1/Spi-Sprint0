angular.module('frontApp')
.controller('AddEnseignantCtrl', ['$scope', '$http', function($scope, $http) {
    
    	$scope.addEnseignant = function() {
           $http.post('http://localhost:8085/enseignant/', $scope.ens).
        		then(function(response) {
            	console.log(response.data);
        });
        
        
        };
}]);

