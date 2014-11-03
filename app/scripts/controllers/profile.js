'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', 
  		function ($scope, $rootScope, $location, AuthenticationService) {
		  	$scope.userName = $rootScope.globals.currentUser.username;
		  	

		    $scope.awesomeThings = [
		      'HTML5 Boilerplate',
		      'AngularJS',
		      'Karma'
		    ];

		$scope.defaultCurrentViewTo = function(view){
				switch(view){
				case "feedsView" : 
					$location.path('/feed');
					break;
				case "profileView" : 
					$location.path('/profile');
					break;
				case "loginView" :
				default:
					$location.path('/');
					break;
			}
		};

		$scope.itemProfileValid = function(){
			return $scope.profileName && $scope.profileAge && $scope.profilePhone && $scope.profileEmail;
		};

		$scope.signOutUser = function(){
			$rootScope.isUserValid = false;
			AuthenticationService.ClearCredentials();
    		$location.path('/');
    	};

}]);
