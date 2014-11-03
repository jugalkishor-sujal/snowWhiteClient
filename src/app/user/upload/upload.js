angular.module('snowWhite.user_upload', [
  'ui.router',
  'restAPIService',
  'angularFileUpload'
])

.config(function config($stateProvider ) {
    $stateProvider.state('user_upload', {
        url: '/user/upload',
    views: {
      "main": {
          controller: 'userUploadCtrl',
          templateUrl: 'user/upload/upload.tpl.html'
      }
    },
    data: { pageTitle: 'Upload' }
  });
})
.controller('userUploadCtrl', function userUploadController($scope, $location, $upload, supplementalApiUri) {
    $scope.files = $scope.files || '';
    $scope.onFileSelect = function ($files) {
            $scope.files = $files;           
    };
    $scope.onFileUpload = function () {
            for (var i = 0; i < $scope.files.length; i++) {
                var file = $scope.files[i];
                $scope.upload = $upload.upload({
                    url: supplementalApiUri + "/api/file/add/user", 
                    method: 'POST',
                    //headers: {'header-key': 'header-value'},
                    //withCredentials: true,
                    data: { myObj: $scope.myModelObj },
                    file: file, 
                    //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] 
                    // customize file formData name ('Content-Disposition'), server side file variable name. 
                    //fileFormDataName: myFile, 
                    //formDataAppender: function(formData, key, val){}
                }).progress(function (evt) {
                    $scope.prog = 'percent: ' + parseInt(100.0 * evt.loaded / evt.total);
                }).success(function (data, status, headers, config) {
                    // file is uploaded successfully
                    $location.path("/user/dashboard");
                });
                //.error(...)
                //.then(success, error, progress); 
                // access or attach event listeners to the underlying XMLHttpRequest.
                //.xhr(function(xhr){xhr.upload.addEventListener(...)})
            }
        };
});