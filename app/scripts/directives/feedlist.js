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
      template: '<div ng-repeat = "item in items"> <br>' + 
      				'<div ng-class-odd="odd" ng-class-even="even" class = "padding">' + 
      					'<img class = "usrimgSize" ng-src="images/user_icon.jpeg">' + 
       					'<label id = "feedValues"> {{item.caption}} </label>' +
       					'<label> {{date | date:"MM-dd-yyyy HH:mm:ss"}} </label>' +
       					'<img class = "usrDelImg" src="images/remove_icon.jpeg" ng-click= "deleteItems(item.id)">' +
       				'</div>' +
       			'</div>' 
      };
  });

