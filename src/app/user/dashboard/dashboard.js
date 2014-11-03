angular.module('snowWhite.user_dashboard', [
  'ui.router',
  'highcharts-ng'
])

.config(function config($stateProvider) {
    $stateProvider.state('user_dashboard', {
        url: '/user/dashboard',
        views: {
            "main": {
                controller: 'userDashboardCtrl',
                templateUrl: 'user/dashboard/dashboard.tpl.html'
            }
        },
        data: { pageTitle: 'Dashboard' }
    });
})

.controller('userDashboardCtrl', function userDashboardController($scope,$http, $restAPIService) {
    $scope.$on('timer-tick', function (event, args) {
        $http.get('http://dev.roadlogica.com:8080/api').success(function (data) {
            console.log(data);
            $scope.configValOB = data.ob;
            $scope.configValOBL = data.obl;
            $scope.configValTICKS = data.ticks;
            $scope.configValCBQ = data.cbqlen;
            $scope.configValORDERS = data.orders;
            $scope.configValMATCHES = data.matches;
            $scope.setGaugeValue($scope.configOB, data.ob);
            $scope.setGaugeValue($scope.configOBL, data.obl);
            $scope.setGaugeValue($scope.configTICKS, data.ticks);
            $scope.setGaugeValue($scope.configCBQ, data.cbqlen);
            $scope.setGaugeValue($scope.configORDERS, data.orders);
            $scope.setGaugeValue($scope.configMATCHES, data.matches);
        });
    });

    $scope.setGaugeValue = function ($gauge, $val) {
        $gauge.series[0].data[0] = $val;
    }
    $scope.initGaugeOptions = function ($max) {
        var copiedObject = jQuery.extend(true, {}, $scope.current.defaultHCSolidGaugeOptions);
        copiedObject.yAxis.currentMax = $max;
        return copiedObject;
    }

    $scope.configOB = $scope.initGaugeOptions(7000);
    $scope.configOBL = $scope.initGaugeOptions(1000000);
    $scope.configTICKS = $scope.initGaugeOptions(100000000);
    $scope.configCBQ = $scope.initGaugeOptions(35536);
    $scope.configORDERS = $scope.initGaugeOptions(300);
    $scope.configMATCHES = $scope.initGaugeOptions(1024);
});
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();