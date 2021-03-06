'use strict';

describe('Controller: WiwoCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var WiwoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WiwoCtrl = $controller('WiwoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of projects to the scope', function () {
    expect(scope.projects.length).toBe(4);
  });
});
