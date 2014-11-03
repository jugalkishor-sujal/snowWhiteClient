
angular.module('snowWhite.user_config', [
  'ui.router'
])

.config(function config($stateProvider) {
    $stateProvider.state('user_config', {
        url: '/user/config',
        views: {
            "main": {
                controller: 'userConfigCtrl',
                templateUrl: 'user/config/config.tpl.html'
            }
        },
        data: { pageTitle: 'Config' }
    });
})

.controller('userConfigCtrl', function userConfigController($scope) {
  
});