'use strict';

/**
 * @ngdoc overview
 * @name mybookApp
 * @description
 * # mybookApp
 *
 * Main module of the application.
 */


angular
  .module('mybookApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
    //'Authentication'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/feed', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])


/*The app.run() method here is used to initialise the currentUser global variable from a cookie 
to keep the user logged in between page reloads, it also contains and an event handler to check 
if the user is logged in before each route change.*/

  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            var area = $location.url().split('/')[1];
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
