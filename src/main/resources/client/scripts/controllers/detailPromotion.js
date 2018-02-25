angular.module('frontApp')
.controller('DetailPromotionCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getPromotionById = function() {
		$http.get('http://localhost:8085/promotion/'+$routeParams.id).
        then(function(response) {
            $scope.pro = response.data;
        });
	}
    
	$scope.getPromotionById();
}]);