'use strict';




angular.module('frontApp')
.controller('FormationCtrl', ['$scope' , '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    var getFormation = function() {
    	$http.get('http://localhost:8085/formation').
        then(function(response) {
            $scope.formations = response.data;
            
        });
    }
    
    getFormation();
    
    
    
}]);