/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'
var datepickerApp = angular.module('datepickerApp', []);

datepickerApp.controller('datepickerController', function ($scope, $log) {
    $scope.reset = function () {
        $scope.selectedDatetime = moment();
        $scope.selectedDate = $scope.selectedDatetime.format('DD/MM/YYYY')
        $scope.selectedTime = $scope.selectedDatetime.format('h:mm A');
    }

    $scope.reset();

    $scope.datetimeChange = function () {
        var date = $scope.selectedDate + ' ' + $scope.selectedTime;
        $log.info(date);
        $scope.selectedDatetime = moment(date, 'DD/MM/YYYY h:mm A');
    }
});

datepickerApp
    .directive('myTimepicker', function () {
        return{
            restrict: 'A',
            link: function (scope, element) {
                element.timepicker({
                    scrollbar: true,
                    //timeFormat: 'HH:mm',
                    change: function (time) {
                        scope.selectedTime = moment(time).format('h:mm A');
                        console.log(time);
                        scope.datetimeChange();
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
                })
            }
        }

    })

