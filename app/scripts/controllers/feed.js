'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('FeedCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
