'use strict';

describe('Directive: FeedList', function () {

  // load the directive's module
  beforeEach(module('mybookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-feed-list></-feed-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the FeedList directive');
  }));
});
