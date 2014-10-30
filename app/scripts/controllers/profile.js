'use strict';

/**
 * @ngdoc function
 * @name mybookApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mybookApp
 */
angular.module('mybookApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
