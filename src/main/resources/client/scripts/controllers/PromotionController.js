'use strict';




angular.module('frontApp')
.controller('PromotionCtrl', ['$scope' , '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    var getPromotion = function() {
    	$http.get('http://localhost:8085/promotion').
        then(function(response) {
            $scope.promotions = response.data;
            
        });
    }
    
    getPromotion();
    
    
    
}]);