/**
 * Created by Maurice on 6/4/2015.
 */


describe('The MessageController', function () {
    var ctrl, scope;
    beforeEach(module('demoApp'))

    beforeEach(inject(function ($controller) {
        scope = {};
        ctrl = $controller('MessageController', {
            $scope: scope
        });

    }))


    it('should be created', function () {
        expect(ctrl).toBeDefined();
    })

    it('should have a message on scope', function(){

        expect(scope.message).toBeDefined();
    })
})