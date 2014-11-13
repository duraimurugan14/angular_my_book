'use strict';

/**
 * @ngdoc service
 * @name mybookApp.utilsservice
 * @description
 * # utilsservice
 * Service in the mybookApp.
 */
angular.module('mybookApp')
  .factory('utilsservice', ['$location', '$rootScope', function utilsservice($location, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	signOutUser : function(){
		var self = this;
        $rootScope.isUserValid = false;
        self.defaultCurrentViewTo("/");
    	},

		defaultCurrentViewTo : function(view){
			switch(view){
			case "feedsView" : 
				$location.path('/feed');
				break;
			case "profileView" : 
				$location.path('/profile');
				break;
			case "loginView" :
			default:
				$location.path('/');
				break;
			}
		}
    };
}]);
