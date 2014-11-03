angular.module('snowWhite.user_list', [
  'ui.router'
])

.config(function config($stateProvider) {
    $stateProvider.state('user_list', {
        url: '/user/list',
        views: {
            "main": {
                controller: 'userDashboardCtrl',
                templateUrl: 'user/list/list.tpl.html'
            }
        },
        data: { pageTitle: 'Dashboard' }
    });
})
.controller('userListCtrl', function userListController($scope, $restAPIService) {
    $scope.files = $scope.files || [];    
    var request = { name: 'user' };
    $restAPIService.GetUserFiles(request).then(
        function (result) {
            
            $scope.files = result.data;
        },
        function (error) {
            $scope.files = [];
           alert('error');
        });
    $scope.detail = function () {

    };

});