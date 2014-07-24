'use strict';

describe('Test to print out jasmine version', function() {
    it('prints jasmine version', function() {
        console.log('jasmine-version:' + jasmine.getEnv().versionString());
    });
});

describe('Controller governing FindAddress widget on contact Page', function(){
    var scope;

    beforeEach(module('alzApp'));

    beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
    }));

    it('should initialize an address list', inject(function($controller) {

        $controller('contactController', {
            $scope: scope
        });
        expect(scope.addresses.length > 0).toBeTruthy();

    }));

    it('should call siloAddresses whenever postcode input changes', inject(function($controller) {

    $controller('contactController', {
      $scope: scope
    });

    spyOn(scope, 'siloAddresses');
    scope.$apply();
    scope.postcodeInputFragment = '79';
    scope.$apply();
    expect(scope.siloAddresses.callCount).toEqual(2); // Actually twice because, including undefined entry on page load
    }));
});
