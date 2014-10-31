'use strict';

/**
 * @ngdoc directive
 * @name mybookApp.directive:FeedList
 * @description
 * # FeedList
 */
angular.module('mybookApp')
  .directive('FeedList', function () {
    return {
      template: '<div>This is a directive content</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the FeedList directive');
      }
    };
  });
