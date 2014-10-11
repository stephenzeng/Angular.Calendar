/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'

describe('calendarControllerTest', function () {
    var createController, scope;
    var log;

    beforeEach(module('calendarApp'));
    beforeEach(inject(function ($rootScope, $controller, $log) {
        scope = $rootScope.$new();
        log = $log;
        createController = function () {
            return $controller('calendarController', {$scope: scope});
        }
    }));

    it('should return correct array of dates', function () {
        var controller = createController();
        expect(scope.getCalendarDates).toBeDefined();

        var weeks = scope.getCalendarDates(2014, 10);
        expect(weeks[0][0].toString()).toBe(new Date(2014, 8, 28).toJSON());
        expect(weeks[5][6].toString()).toBe(new Date(2014, 10, 8).toJSON());
    });

    it('should set to next month', function () {
        var controller = createController();
        expect(scope.setToNextMonth).toBeDefined();
        var date = new Date();
        expect(scope.currentDate.getFullYear()).toBe(date.getFullYear());
        expect(scope.currentDate.getMonth()).toBe(date.getMonth());

        scope.setToNextMonth();
        date.setMonth(date.getMonth() + 1);
        expect(scope.currentDate.getFullYear()).toBe(date.getFullYear());
        expect(scope.currentDate.getMonth()).toBe(date.getMonth());
    })

    it('should set to previous month', function () {
        var controller = createController();
        expect(scope.setToPreviousMonth).toBeDefined();
        var date = new Date();
        expect(scope.currentDate.getFullYear()).toBe(date.getFullYear());
        expect(scope.currentDate.getMonth()).toBe(date.getMonth());

        scope.setToPreviousMonth();
        date.setMonth(date.getMonth() - 1);
        expect(scope.currentDate.getFullYear()).toBe(date.getFullYear());
        expect(scope.currentDate.getMonth()).toBe(date.getMonth());
    })

    it('should be able to check if the input is today', function () {
        var controller = createController();
        expect(scope.isToday).toBeDefined();

        var date = new Date();
        expect(scope.isToday(date)).toBe(true);
        expect(scope.isToday(date.setDate(date.getDate() + 1))).toBe(false);
    })

    it('should be able to check if the input is the current month ', function () {
        var controller = createController();
        expect(scope.isCurrentMonth).toBeDefined();

        // today
        var date = new Date();
        expect(scope.isCurrentMonth(date)).toBe(true);

        // start of the month
        date = new Date();
        date = new Date(date.getFullYear(), date.getMonth(), 1);
        expect(scope.isCurrentMonth(date)).toBe(true);

        // end of the month
        date = new Date();
        date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        expect(scope.isCurrentMonth(date)).toBe(true);

        // end of the previous month
        date = new Date();
        date = new Date(date.getFullYear(), date.getMonth(), 0);
        expect(scope.isCurrentMonth(date)).toBe(false);

        // start of the next month
        date = new Date();
        date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        expect(scope.isCurrentMonth(date)).toBe(false);
    })
})
