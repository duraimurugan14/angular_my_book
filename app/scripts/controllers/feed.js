'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('FeedCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', function ($scope, $rootScope, $location, AuthenticationService) {
  	$scope.userName = $rootScope.globals.currentUser.username;

	$scope.itemFeedValid = function () {
		return $scope.feedsText;
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


	$scope.saveFeed = function(){
		var count = 0;
		var caption = $scope.feed.caption;
		if(caption.length === 0){
			feedResource.addFeed(angular.extends($scope.feed));
		}
		else{

		}
	}

}])

  .factory('feedResource', function(){
  	feedData = [];
  	feed = {
            caption: 'Fred Belcher'
        };
  	return{
  		feedList : function(){
  			return feedData;
  		},
  		addFeed : function (feed) {
  			feedData.push(feed);
  		},
  		deleteFeed : function (id) {
  			feedData.splice(id, 1);
  		}
  	}
  })


