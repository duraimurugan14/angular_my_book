'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mybookApp
 */


angular.module('mybookApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location',  'AuthenticationService', 
  	function ($scope, $rootScope, $location, AuthenticationService) {	

	$rootScope.isUserValid = false;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    AuthenticationService.ClearCredentials();
	$scope.loginUser = function(){
     	$scope.userCredentials = $scope.loginUsrName + " " + $scope.loginUsrPwd;
     	$scope.Login($scope.loginUsrName, $scope.loginUsrPwd);
		if (!$rootScope.isUserValid) { 
			$scope.loginUsrName = null;
			$scope.loginUsrPwd = null;
		}
		else{
			$scope.users = AuthenticationService.SetCredentials($scope.loginUsrName, $scope.loginUsrPwd);
			alert($scope.users);
			$location.path('/feed');
		}
    };


    $scope.Login = function(username, password){
			if(username.length > 8){
				alert("User Name cannot exceed 8 characters");
				$rootScope.isUserValid = false;
			}
			else if(username === "admin12"){
				if (password < 6) {
					alert("Password you entered is too short!");
					$rootScope.isUserValid = false;
				}
				else if (password === "admin22") {	
					$rootScope.isUserValid = true;
				}
				else{
					alert("The password you entered is invalid. Please check and re-enter!");
					$rootScope.isUserValid = false;
				}
			}
			else{
				alert("The username you entered is invalid. Please check and re-enter!");
				$rootScope.isUserValid = false;
			}
			return $rootScope.isUserValid;
	    };
}]);


		