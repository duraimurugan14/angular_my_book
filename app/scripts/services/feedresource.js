'use strict';

/**
 * @ngdoc service
 * @name mybookApp.feedResource
 * @description
 * # feedResource
 * Service in the mybookApp.
 */
angular.module('mybookApp')
  .service('feedResource', function feedResource() {
    // AngularJS will instantiate a singleton by calling "new" on this function
       	var data = [];	    
	    return {
            list: function () {
                return data;
            },
	        add: function (item) {
                item.id = data.length;
	            data.push(item);
	        },
	        remove: function (id) {
	            data.splice(data.indexOf(data[id]), 1);
	        }
	    };

  });
