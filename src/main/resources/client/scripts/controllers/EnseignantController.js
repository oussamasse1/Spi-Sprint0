'use strict';




angular.module('frontApp')
.controller('EnseignantCtrl', ['$scope' , '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    var getEnseignant = function() {
    	$http.get('http://localhost:8085/enseignant').
        then(function(response) {
            $scope.enseignants = response.data;
            
        });
    }
    
    getEnseignant();
    
    $scope.deleteEnseignant = function(id) {
        $http.delete('http://localhost:8085/enseignant/deletebyno/'+id).
     		then(function(response) {
         	console.log(response.data);
     });
     };
    
}]);
   

