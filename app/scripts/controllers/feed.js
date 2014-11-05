'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the mybookApp
 */

angular.module('mybookApp')
  .controller('FeedCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', 'feedResource','utilsservice', 
  		function ($scope, $rootScope, $location, AuthenticationService, feedResource, utilsservice) {

  	$scope.userName = $rootScope.globals.currentUser.username;      
    $scope.date = new Date();                                       // To get the date in the feed list view
  	
    /* Enables the Post button in feeds page on user entry */
	$scope.feedDataPresent = function () {                           
		return $scope.currentItem.caption;
	};

    /* Opens the URL of the feed when the user clicks */
    $scope.openFeedUrl = function(){
        window.open($scope.item.caption);
    };


    $scope.currentItem = {};
    $scope.items = feedResource.list();    
    
    /* Finds the feed type and assigns to currentItem.feedType variable*/
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
            $scope.getFeedType();                                        // gets the feed type
            feedResource.add(angular.extend($scope.currentItem, {}));    // calls the add function in feedResource service
        }
        $scope.currentItem= {};                                          // Re-initializes the object to {}
    };
        
    $scope.deleteItems = function (id) {
        feedResource.remove(id);                                         // Deletes the feed object based on the id through feedResource service
    };


    $scope.signOut = function(){
        utilsservice.signOutUser();        
    };

    $scope.changeView = function(view){
        utilsservice.defaultCurrentViewTo(view);
    };

}]);
	