/// <reference path="../lib/jasmine-1.3.1/jasmine.js" />
/// <reference path="../lib/angular/angular.js" />
/// <reference path="../lib/angular/angular-mocks.js" />


describe("foo directive", function () {

    beforeEach(module("app"));

    var scope;
    var elem;

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.age = 10;

        elem = angular.element("<button foo>Hello!</button>");
        $compile(elem)(scope);
    }));

    it("should add one to age when button is clicked", function () {
        elem.triggerHandler("click");
        expect(scope.age).toBe(11);
    });
});


describe("PersonCtrl", function () {

    beforeEach(module("app"));

    var subject;
    var people_svc_spy;
    var fake_person = {};
    var scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        people_svc_spy = jasmine.createSpyObj("PeopleSvc", ["get", "update"]);
        people_svc_spy.get.andReturn(fake_person);

        subject = $controller("PersonCtrl", {
            $scope: scope,
            PeopleSvc: people_svc_spy
        });
    }));

    it("should populate the results of the people service into the scope", function () {
        expect(scope.person).toBeDefined();
        expect(scope.person).toBe(fake_person);
    });

    it("should have a savePerson on the scope", function () {
        expect(scope.savePerson).toBeDefined();
    });

    it("savePerson should call the save on the PeopleSvc", function () {
        // arrange
        var test = {};
        // Act
        scope.savePerson(test);
        // assert
        expect(people_svc_spy.update).toHaveBeenCalledWith(test);
    });

});

describe("PeopleSvc", function () {

    beforeEach(module("app"));

    var subject;
    beforeEach(inject(function (PeopleSvc) {
        subject = PeopleSvc;
    }));

    it("get API should return a person whose name is Brock", function () {
        var result = subject.get();

        expect(result).toBeDefined();
        expect(result.name).toBe("Brock");
    });

});

