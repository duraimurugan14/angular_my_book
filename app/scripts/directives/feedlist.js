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
      				'<div  class = "padding">' + 
      					'<img class = "usrimgSize" ng-src="images/user_icon.jpeg">' + 
       					'<span id = "feedElement" class = "feedValues"> {{item.caption}}</span>' +
       					'<span class = "feedTime"> {{date | date:"MM-dd-yyyy HH:mm:ss"}} </span>' +
       					'<img class = "usrDelImg" src="images/remove_icon.jpeg" ng-click= "deleteItems(item.id)">' +
       				'</div>' +
       			'</div>' 
      };
  })
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


