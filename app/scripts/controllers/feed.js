'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the mybookApp
 */

angular.module('mybookApp')
  .controller('FeedCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', 'feedResource', 
  		function ($scope, $rootScope, $location, AuthenticationService, feedResource) {

  	$scope.userName = $rootScope.globals.currentUser.username;
    $scope.date = new Date();

var userDetails = { name:undefined, age:undefined, phoneno:undefined, email:undefined, address:undefined, imagefile:undefined};
function User(name, age, phoneno, email, address, imagefile) {
    this.name = name;
    this.age = age;
    this.phoneno = phoneno;
    this.email = email;
    this.address = address;
    this.imagefile = imagefile;
}

    var feedData = {id: undefined, caption : undefined, type : undefined};
    function feed(id, caption, type){
        this.id = id;
        this.caption = caption;
        this.type = type;
    }

  	
	$scope.itemFeedValid = function () {
		return $scope.currentItem.caption;
	};

	$scope.signOutUser = function(){
		$rootScope.isUserValid = false;
    	$location.path('/');
    };

    $scope.openFeedUrl = function(){
        window.open($scope.item.caption);
    };


    $scope.currentItem = {};
    $scope.items = feedResource.list();    
    
    $scope.setCurrentItem = function (item) {
        $scope.currentItem = item;
    };

    $scope.newItem = function () {
        $scope.setCurrentItem({caption: null});
    };



    $scope.getFeedType = function(){
        if(!$scope.currentItem.caption){
            alert("Error validating feed type");
        }
        else{
            var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            if(!pattern.test($scope.currentItem.caption)) {
                $scope.currentItem.feedType = 'text';
            } else {
                $scope.currentItem.feedType = 'url';
            }
        }
    };
  
    $scope.save = function () {
        var caption = $scope.currentItem.caption;
        if (!caption) {
            alert("Error posting user feed data");
        } 
        else {
            $scope.getFeedType();
            feedResource.add(angular.extend($scope.currentItem, {}));
        }
        $scope.currentItem= {};
    };
        
    $scope.deleteItems = function (id) {
            feedResource.remove(id);
    };

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
}])
	.factory('feedResource', function () {
	    var data = [];	    
	    return {
            list: function () {
                return data;
            },
	        add: function (item) {
                item.id = data.length;
	            data.push(item);
	        },
	        remove: function (id) {
	            data.splice(data.indexOf(data[id]), 1);
	        }
	    };
	});