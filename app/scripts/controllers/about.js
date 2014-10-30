'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
