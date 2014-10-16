/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'
var datepickerApp = angular.module('datepickerApp', []);

datepickerApp.controller('datepickerCtr', function ($scope, $log) {
    $scope.selectedDatetime = moment();
});
