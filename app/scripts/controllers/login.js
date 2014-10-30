'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService',
  	function ($scope, $rootscope, $location, AuthenticationService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.loginUser = function(){
     	alert("Success");
     	$scope.userCredentials = $scope.loginUsrName + " " + $scope.loginUsrPwd;
     	alert($scope.userCredentials);
     	AuthenticationService.Login($scope.loginUsrName, $scope.loginUsrPwd)
     		.success(function(data){
     			AuthenticationService.SetCredentials($scope.loginUsrName, $scope.loginUsrPwd);
     			$location.path('/');
     		})
     		.error(function(data){
     			$scope.error = data.Message;

     		});
	};	

}]);
