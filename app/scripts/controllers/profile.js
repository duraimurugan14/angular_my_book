'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', '$timeout',
  		function ($scope, $rootScope, $location, AuthenticationService, $timeout) {
		
		$scope.profileIsValid = false;
		$scope.src = "images/user_icon.jpeg";
		$scope.userName = $rootScope.globals.currentUser.username;
		$scope.onlyNumbers = /^\d+$/;

	$timeout(function() {
            console.log("Image has loaded!");
        });

// var userDetails = { name:undefined, age:undefined, phoneno:undefined, email:undefined, address:undefined, imagefile:undefined};
// function User(name, age, phoneno, email, address, imagefile) {
// 	this.name = name;
// 	this.age = age;
// 	this.phoneno = phoneno;
// 	this.email = email;
// 	this.address = address;
// 	this.imagefile = imagefile;
// }

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


		$scope.profileIsValid = function(){
			//var mailPattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
			var atpos = $scope.profileUsrEmail.indexOf("@");
		    var dotpos = $scope.profileUsrEmail.lastIndexOf(".");
		    var age = $scope.profileUsrAge;
			if ($scope.profileUsrName.length === 0) {
				alert("Please enter valid name");
				return false;
			}
			else if ($scope.profileUsrName.length > 50) {
				alert("Profile Name cannot exceed 50 characters. Please enter valid name");
				return false;
			}
			else if ((parseInt(age) < 1 && parseInt(age) > 100) || parseInt(age) === NaN || age == "") {
				alert("Please enter a valid Age!");
				return false;
			}
			else if($scope.profileUsrPhone.length < 3) { 
			   alert("Please enter a valid phone number!");
			   return false;
			}
		   	else if (atpos< 1 || dotpos<atpos+2 || dotpos+2 >= $scope.profileUsrEmail.length) {
				alert("Please provide a valid email address!");
				return false;
			}
			else{
				return true;
			}
		};


		$scope.itemProfileValid = function(){
			return $scope.profileUsrName && $scope.profileUsrAge && $scope.profileUsrPhone && $scope.profileUsrEmail;
		};

		$scope.signOutUser = function(){
			$rootScope.isUserValid = false;
    		$location.path('/');
    	};

    	$scope.saveProfileInformation = function(){
    		if (!$scope.profileIsValid()) {
    			alert("Error saving profile");
    		}
    		else{
    			var user = new User($scope.profileUsrName, $scope.profileUsrAge, $scope.profileUsrPhone, $scope.profileUsrEmail, $scope.profileUsrAddress, $scope.profileUsrImg);
				localStorage.setItem("profileData", JSON.stringify(user));
				alert("Profile Saved");
    		}
    	};


    	$scope.getProfileInformation = function(){
    		var temp =  localStorage.getItem("profileData");
		    if (!temp){
		    return [];
		    }
	        $scope.currentData = JSON.parse(temp);
	        $scope.profileUsrName = $scope.currentData.name;
	        $scope.profileUsrAge = $scope.currentData.age;
	        $scope.profileUsrPhone =$scope.currentData.phoneno;
	        $scope.profileUsrEmail = $scope.currentData.email;
	        $scope.profileUsrAddress = $scope.currentData.address;
	      	//$scope.profileUsrImg = $scope.currentData.name;
    	};


}])
.directive('filelistBind', function() {
  return function( scope, elm, attrs ) {
    elm.bind('change', function( evt ) {
      scope.$apply(function() {
        scope[ attrs.name ] = evt.target.files;
      });
    });
  };
})
.directive('ngLoad', [function() {
    return {
        restrict: 'A',
        scope: {
            loadHandler: '&ngLoad'
        },
        link: function (scope, element, attr) {
            element.on('load', scope.loadHandler);
        }
    };
}]);
