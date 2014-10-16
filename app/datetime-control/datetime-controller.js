/**
 * Created by STEPHEN on 10/16/2014.
 */
'use strict'

var myDatetimePickerApp = angular.module('myDatetimePickerApp', []);

myDatetimePickerApp.controller('myDatetimePickerCtr', function ($scope, $log) {
    $scope.selectedDatetime = moment();
    $scope.selectedDate = $scope.selectedDatetime.format('DD/MM/YYYY')
    $scope.selectedTime = $scope.selectedDatetime.format('h:mm A');

    $scope.setDate = function (date) {
        $scope.selectedDate = moment(date).format('DD/MM/YYYY');
        var date = $scope.selectedDate + ' ' + $scope.selectedTime;
        $log.info(date);
        $scope.selectedDatetime = moment(date, 'DD/MM/YYYY h:mm A');
    }

    $scope.setTime = function (time) {
        $scope.selectedTime = moment(time).format('h:mm A');
        var date = $scope.selectedDate + ' ' + $scope.selectedTime;
        $log.info(date);
        $scope.selectedDatetime = moment(date, 'DD/MM/YYYY h:mm A');
    }
});

myDatetimePickerApp
    .directive('myTimepicker', function () {
        return{
            restrict: 'A',
            link: function (scope, element) {
                element.timepicker({
                    scrollbar: true,
                    change: function (time) {
                        scope.setTime(time);
                        scope.$apply();
                    }
                });
            }
        }
    })
    .directive('myDatepicker', function () {
        return{
            restrict: 'A',
            link: function (scope, element) {
                element.datepicker({
                    format: 'dd/m/yyyy',
                    autoclose: true
                }).on('changeDate', function (e) {
                    scope.setDate(e.date);
                    scope.$apply();
                })
            }
        }

    })
    .directive('myDatetimePicker', function () {
        return{
            restrict: 'E',
            scope:true,
            templateUrl: './app/datetime-control/datetime.tmp.html',
            controller:'myDatetimePickerCtr'
        }
    })
