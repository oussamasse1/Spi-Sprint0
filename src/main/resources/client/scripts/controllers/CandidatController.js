'use strict';




angular.module('frontApp')
.controller('CandidatCtrl', ['$scope' , '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    var getCandidat = function() {
    	$http.get('http://localhost:8085/candidat').
        then(function(response) {
            $scope.candidats = response.data;
            
        });
    }
    
    getCandidat();
    
    
    
}]);