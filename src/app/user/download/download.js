angular.module('snowWhite.user_download', [
  'ui.router',
  'restAPIService',
  'angularFileUpload'
])

.config(function config($stateProvider ) {
    $stateProvider.state('user_download', {
        url: '/user/download',
    views: {
      "main": {
          controller: 'userDownloadCtrl',
          templateUrl: 'user/download/download.tpl.html'
      }
    },
    data: { pageTitle: 'Download' }
  });
})
.controller('userDownloadCtrl', function userDownloadController($scope, $location, $upload, supplementalApiUri) {
    $scope.files = $scope.files || '';

});