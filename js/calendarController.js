/**
 * Created by STEPHEN on 10/10/2014.
 */
'use strict'

angular.module('calendarApp').controller('calendarController', function ($scope, $log) {
    var weeks = [[],[],[],[],[],[]];
    var events = [];

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
            return new Date(date).toLocaleDateString() == new Date(event.datetimeFrom).toLocaleDateString();
        })
    }

    $scope.event;

    $scope.newEvent = function(){
        $log.info("new event");
        $scope.event = {
            "title":"",
            "dateFrom":new Date().toLocaleDateString(),
            "timeFrom":new Date().toLocaleTimeString(),
            "dateTo":new Date().toLocaleDateString(),
            "timeTo":new Date().toLocaleTimeString(),
            "location":"",
            "desc":"" };
    }

    $scope.addEvent = function(){
        $log.info("add event");
        events.push($scope.event);
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