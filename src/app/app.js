angular.module('snowWhite', [
'ui.router',
'ui.bootstrap',
'ngCookies',
'templates-app',
'templates-common',
'pascalprecht.translate',
'timer',
'highcharts-ng',
'snowWhite.plunker',
'snowWhite.filters',
'snowWhite.controllers',
'snowWhite.main',
'snowWhite.navigation',
'snowWhite.localize',
'snowWhite.activity',
'snowWhite.smartui',
'snowWhite.Maindirectives',

'snowWhite.login',

'snowWhite.user_dashboard',
'snowWhite.user_list',
'snowWhite.user_queue',
'snowWhite.user_upload',
'snowWhite.user_download',
'snowWhite.user_config',
'snowWhite.user_profile',

'snowWhite.admin_dashboard',
'snowWhite.admin_profile',
'snowWhite.admin_users',

'snowWhite.operator_dashboard',
'snowWhite.operator_profile'
  ])
   
.config(function myAppConfig($stateProvider, $urlRouterProvider, $translateProvider, $logProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $logProvider.debugEnabled(true);
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
    $translateProvider.useLocalStorage();
    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/languages/',
        suffix: '.json'
    });
    // Tell the module what language to use by default and load this file
    $translateProvider.preferredLanguage('en_US');
    // $translateProvider.fallbackLanguage('en_US');

})
.run(['$rootScope', 'settings', function ($rootScope, settings) {
    settings.currentLang = settings.languages[0]; // en
 
}])

//.constant('supplementalApiUri', 'http://localhost:2100')//local
.constant('supplementalApiUri', 'http://192.168.1.51:2100')//dev
//.constant('supplementalApiUri', 'http://snowwhite.roadlogica.com:2100')//live
.controller('HeaderCtrl', function HeaderCtrl($scope, $location, breadcrumbs) {
    $scope.location = $location;
    $scope.breadcrumbs = breadcrumbs;
    $scope.goto = function (location) {
        $location.path("/" + location);
    };
})
.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $log, $cookies, $window, $translate) {    
    $scope.loginCheck = function () {
        if ($location.path() === '/login') {
            $('#header').addClass('hide');
            $('#left-panel').addClass('hide');
            $('#ribbon').addClass('hide');
            $('#shortcut').addClass('hide');
            $('#main').css('margin-left', '0px');
            $('body').addClass('body_login');
        }
        else {
            $('#header').removeClass('hide');
            $('#left-panel').removeClass('hide');
            $('#ribbon').removeClass('hide');
            $('#shortcut').removeClass('hide');
            $('#main').css('margin-left', '');
            $('body').removeClass('body_login');
        }
    };
    $rootScope.current = {};
    if ($window.localStorage.getItem('current')) {
        if ($window.localStorage.getItem('current') === 'undefined') {
            $rootScope.current = {};
        } else {
            $rootScope.current = JSON.parse($window.localStorage.getItem('current'));
        }
    }
    $rootScope.$watch('current', function (new_value, old_value) {
        if (new_value !== old_value) {
            $window.localStorage.setItem('current', JSON.stringify($rootScope.current));
        }
    }, true);
    $scope.logCurrent = function () {
        $log.debug($rootScope.current);
    };
    $scope.localStorage = function () {
        $log.debug(JSON.parse($window.localStorage.current));
    };
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | Snow-White';
        }
    });
    $scope.clearLocalStorage = function () {
        $window.localStorage.clear();
        $scope = $rootScope = $window.localStorage = {};
        document.location = 'index.html';
        return false;
    };
    $scope.current.userImage = $scope.current.userImage || 'assets/img/avatars/sunny.png';
    $scope.current.userName = $scope.current.userName || 'Admin';
    $scope.current.defaultHCSolidGaugeOptions = {
        options: {
            chart: {
                type: 'solidgauge'
            },
            title: null,
            pane: {
                center: ['50%', '55%'],
                size: '100%',
                startAngle: -135,
                endAngle: 135,
                background: {
                    backgroundColor:'#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            }
        },
        series: [{
            data: [16],
            dataLabels: {
                borderWidth:0
            }
        }],
        tooltip: {
            enabled: false
        },    	
        size: {
            height: 200,
            width: 200
        },
        yAxis: {
            currentMin: 0,
            currentMax: 100,     
            stops: [
    		[0.1, '#55BF3B'],
    		[0.5, '#DDDF0D'],
    		[0.9, '#DF5353']
            ],  
        },
        loading: false
    };
   // $.fn.snow({durationMillis:100});
});