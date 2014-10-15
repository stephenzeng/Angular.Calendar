/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'
var datepickerApp = angular.module('datepickerApp', []);

$('input.datepicker').datepicker({format: 'dd/m/yyyy'});
$('input.timepicker').timepicker({scrollbar: true, timeFormat: 'HH:mm'});

datepickerApp.controller('datepickerController', function ($scope, $log) {
    $scope.selectedDatetime = moment();
    $scope.selectedDate = $scope.selectedDatetime.format('DD/MM/YYYY')
    $scope.selectedTime = $scope.selectedDatetime.format('HH:mm');

    $scope.reset = function () {
        $scope.selectedDatetime = moment();
    }

    $scope.dateChange = function () {
        var date = $scope.selectedDate + ' ' + $scope.selectedTime;
        $log.info(date);
        $scope.selectedDatetime = moment(date, 'DD/MM/YYYY HH:mm');
    }
});

datepickerApp.directive('myDatepicker', function () {
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.datepicker({
                onClose: function (date) {
                }
            });
        }
    }
})