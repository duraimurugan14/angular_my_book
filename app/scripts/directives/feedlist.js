'use strict';

/**
 * @ngdoc directive
 * @name mybookApp.directive:FeedList
 * @description
 * # FeedList
 */
angular.module('mybookApp')
  .directive('feedList', function () {
    return {
      restrict: 'E',
      template: '<div ng-repeat = "item in items">' +
      				'<div class = "padding">' + 
      					'<img class = "usrimgSize" ng-src="images/user_icon.jpeg">' + 
       					'<label id = "feedValues"> {{item.caption}} </label>' +
       					'<label> {{date | date:"MM-dd-yyyy"}} </label>' +
       					'<img class = "usrDelImg" src="images/remove_icon.jpeg" ng-click= "deleteFeed(i)">' +
       				'</div>' +
       			'</div>' + '<br>'
      };
  });

