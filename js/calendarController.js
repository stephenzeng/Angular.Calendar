/**
 * Created by STEPHEN on 10/10/2014.
 */
'use strict'

angular.module('calendarApp').controller('calendarController', function ($scope, $log) {
    var weeks = [[],[],[],[],[],[]];
    var events = [
        {"id":1, "datetime":new Date(2014,10,1).toJSON(), "desc":"Another test event in Vic park" },
        {"id":2, "datetime":new Date(2014,10,4).toJSON(), "desc":"Another test event in Vic park" },
        {"id":3, "datetime":new Date(2014,9,6).toJSON(), "desc":"Another test event in Vic park" },
        {"id":4, "datetime":new Date(2014,9,10).toJSON(), "desc":"Another test event in Vic park" }
    ];

    $scope.currentDate = new Date();

    $scope.getCalendarDates = function () {
        var firstDate = getFirstCalendarDate($scope.currentDate.getFullYear(), $scope.currentDate.getMonth());
        var index = 0;

        for (var i = 0; i < weeks.length; i++) {
            for (var j = 0; j < 7; j++) {
                var days = (i * 7) + j;

                var date = new Date(firstDate);
                date.setDate(date.getDate() + days);
                weeks[i][j] = date.toJSON();
            }
        }

        return weeks;
    }

    $scope.setToNextMonth = function () {
        $scope.currentDate.setMonth($scope.currentDate.getMonth() + 1);
    }

    $scope.setToPreviousMonth = function () {
        $scope.currentDate.setMonth($scope.currentDate.getMonth() - 1);
    }

    $scope.isToday = function (date) {
        return new Date(date).toLocaleDateString() == new Date().toLocaleDateString();
    }

    $scope.isCurrentMonth = function (date) {
        var inputDate = new Date(date);
        return inputDate.getFullYear() == $scope.currentDate.getFullYear()
            && inputDate.getMonth() == $scope.currentDate.getMonth();
    }

    $scope.getEvents = function(date){
        return events.filter(function(event){
            return new Date(date).toLocaleDateString() == new Date(event.datetime).toLocaleDateString();
        })
    }

    $scope.addEvent = function(){
        events.push({"id":5, "datetime":new Date(2014,9,12).toJSON(), "desc":"test event" });
    }

    var getFirstCalendarDate = function (year, month) {
        var firstDate = new Date(year, month, 1);
        var weekDay = firstDate.getDay();

        while (weekDay != 0) {
            firstDate.setDate(firstDate.getDate() - 1);
            weekDay = firstDate.getDay();
        }

        return firstDate;
    }
});