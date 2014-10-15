/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'
var datepickerApp = angular.module('datepickerApp', []);

$('input.datepicker').datepicker();
$('input.timepicker').timepicker({scrollbar: true});

datepickerApp.controller('datepickerController', function ($scope) {
    $scope.selectedDatetime = new Date();

    $scope.reset = function () {
        $scope.selectedDatetime = new Date();
    }
});