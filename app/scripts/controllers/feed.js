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

  	$scope.feed = {
        feed : "",
        email : "",
        comment: ""
    };

//http://blog.hugeaim.com/2013/04/07/clearing-a-form-with-angularjs/

  	$scope.feeds = [];
  	// $scope.feed = {};
  	$scope.date = new Date();
	$scope.itemFeedValid = function () {
		return $scope.currentItem.caption;
	};

	$scope.signOutUser = function(){
		$rootScope.isUserValid = false;
		AuthenticationService.ClearCredentials();
    	$location.path('/');
    };


    $scope.currentItem = {};
    $scope.items = feedResource.list();    
    
    $scope.setCurrentItem = function (item) {
        $scope.currentItem = item;
    };

    $scope.newItem = function () {
        $scope.setCurrentItem({caption: null});
    };


    // $scope.selectedItems = function () {
    // 	var id = 0;
    //     return _.where($scope.items, {
    //          id: id++
    //      });
    // }

   
    $scope.save = function () {
        // var items = $scope.selectedItems(),
        var caption = $scope.currentItem.caption;
        if (caption) {
            feedResource.add(angular.extend($scope.currentItem, {}));
        } else {
            // _.each(items, function (item) {
                if (caption) {
                    item.caption = caption;
                }
            // });
        }
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
	    var current_id = null, data = [
	        {
	            caption : "item 1"
	        },
	        {
	            caption : "item 2"
	        }
	    ];
	    
	    return {
	        list: function () {
	            return data;
	        },
	        add: function (item) {
	            data.push(item);
	        },
	        remove: function (item) {
	            data.splice(data.indexOf(item), 1);
	        }
	    };
	});

