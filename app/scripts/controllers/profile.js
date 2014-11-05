'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', '$timeout', 'utilsservice',
  		function ($scope, $rootScope, $location, AuthenticationService, $timeout, utilsservice) {
		
		$scope.profileIsValid = false;
		$scope.src = "images/user_icon.jpeg";
		$scope.userName = $rootScope.globals.currentUser.username;
		$scope.onlyNumbers = /^\d+$/;


	/* User object creation and definition */
	var userDetails = { name:undefined, age:undefined, phoneno:undefined, email:undefined, address:undefined, imagefile:undefined};
	function User(name, age, phoneno, email, address, imagefile) {
		this.name = name;
		this.age = age;
		this.phoneno = phoneno;
		this.email = email;
		this.address = address;
		this.imagefile = imagefile;
	}


	$timeout(function() {
            console.log("Image has loaded!");
    });

	$scope.profileIsValid = function(){
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

    	$scope.saveProfileInformation = function(){
    		if (!$scope.profileIsValid()) {
    			alert("Error saving profile!");
    		}
    		else{
    			var user = new User($scope.profileUsrName, $scope.profileUsrAge, $scope.profileUsrPhone, $scope.profileUsrEmail, $scope.profileUsrAddress, $scope.profileUsrImg);
				localStorage.setItem("profileData", JSON.stringify(user));
				alert("Profile Saved Successfully!");
    		}
    	};


    	$scope.getProfileInformation = function(){
    		var temp =  localStorage.getItem("profileData");
		    if (!temp){
		   		return [];
		    }
		    else{
			    $scope.currentData = JSON.parse(temp);
		        $scope.profileUsrName = $scope.currentData.name;
		        $scope.profileUsrAge = $scope.currentData.age;
		        $scope.profileUsrPhone =$scope.currentData.phoneno;
		        $scope.profileUsrEmail = $scope.currentData.email;
		        $scope.profileUsrAddress = $scope.currentData.address;
		    }
	    };


	$scope.signOut = function(){
        utilsservice.signOutUser();        
    };


    $scope.changeView = function(view){
        utilsservice.defaultCurrentViewTo(view);
    };

}]);
