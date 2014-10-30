'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
