'use strict';

angular
	.module('frontApp', ['ngRoute'
	])
	.config(function ($routeProvider) {
		$routeProvider
		  
		  .when('/enseignant', {
			templateUrl: './views/enseignants.html',
			controller: 'EnseignantCtrl'
		})
		.when('/enseignant/:id', {
			templateUrl: './views/detailEnseignant.html',
			controller: 'DetailEnseignantCtrl'
		})
		.when('/enseignant/update/:id', {
			templateUrl: './views/updateEnseignant.html',
			controller: 'UpdateEnseignantCtrl'
		})
		.when('/enseignant/add', {
			templateUrl: './views/addEnseignant.html',
			controller: 'AddEnseignantCtrl'
		})
		.when('/formation', {
			templateUrl: './views/formations.html',
			controller: 'FormationCtrl'
		})
		.when('/formation/:id', {
			templateUrl: './views/detailFormation.html',
			controller: 'DetailFormationCtrl',
				controllerAs: 'formation'
		})
		.when('/candidat', {
			  templateUrl: '/views/candidats.html',
			  controller: 'CandidatCtrl',
			  controllerAs: 'candidat'
		  })
		  .when('/candidat/:id', {
			templateUrl: './views/detailCandidat.html',
			controller: 'DetailCandidatCtrl'
		})
		.when('/promotion', {
			  templateUrl: '/views/promotions.html',
			  controller: 'PromotionCtrl',
			  controllerAs: 'promotion'
		  })
		  .when('/promotion/:id', {
			templateUrl: './views/detailPromotion.html',
			controller: 'DetailPromotionCtrl'
			
		})
		  .otherwise({
			redirectTo: '/'
		});
	});