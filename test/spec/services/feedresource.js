'use strict';

describe('Service: feedResource', function () {

  // load the service's module
  beforeEach(module('mybookApp'));

  // instantiate service
  var feedResource;
  beforeEach(inject(function (_feedResource_) {
    feedResource = _feedResource_;
  }));

  it('should do something', function () {
    expect(!!feedResource).toBe(true);
  });

});
