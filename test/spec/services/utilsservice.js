'use strict';

describe('Service: utilsservice', function () {

  // load the service's module
  beforeEach(module('mybookApp'));

  // instantiate service
  var utilsservice;
  beforeEach(inject(function (_utilsservice_) {
    utilsservice = _utilsservice_;
  }));

  it('should do something', function () {
    expect(!!utilsservice).toBe(true);
  });

});
