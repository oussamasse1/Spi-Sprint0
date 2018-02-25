()

angular.module('frontApp')
.controller('DeleteEnseignantCtrl', ['$scope', '$http', function($scope, $http) {
    
    	$scope.deleteEnseignant = function() {
           $http.delete('http://localhost:8085/enseignant/deletebyno/:id').
        		then(function(response) {
            	console.log(response.data);
        });
        };
        
        
}]);
