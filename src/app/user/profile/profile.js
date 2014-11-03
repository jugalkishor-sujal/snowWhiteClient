angular.module('snowWhite.user_profile', [
  'ui.router',
  'restAPIService'
])

.config(function config($stateProvider) {
    $stateProvider.state('user_profile', {
        url: '/user/profile',
        views: {
            "main": {
                controller: 'userProfileCtrl',
                templateUrl: 'user/profile/profile.tpl.html'
            }
        },
        data: { pageTitle: 'Profile' }
    });
})

.controller('userProfileCtrl', function userProfileController($window, $rootScope, $scope, $translate, $location, $cookies, $restAPIService,$upload, supplementalApiUri) {
    $scope.current.email = $scope.current.email || '';

    $scope.profile = $scope.profile || {};
    $scope.profile._id = $scope.profile._id || '';
    $scope.profile.email = $scope.profile.email || '';
    $scope.profile.dob = $scope.profile.dob || '';
    $scope.profile.status = $scope.profile.status || '';
    $scope.profile.image_path = $scope.profile.image_path || '';
    $scope.files = $scope.files || '';

    $scope.getUser = function () {
        var request = { "email": $scope.current.email };
        $restAPIService.GetProfileInfo(request).success(function (data) {
            if (data !== null) {
                console.log(data[0]);
                $scope.profile.email = data[0].email;
                $scope.profile.dob = data[0].dob;
                $scope.profile.status = data[0].status;
                $scope.profile.image_path = data[0].image_path;
                $scope.profile._id = data[0]._id;
                $scope.profile.username = data[0].username;
            } else {
                alert('Please Enter correct username/password');
            }
        }).error(function (err) {
            alert(err);
        });
    };
    $scope.getUser();
    $scope.onFileSelect = function ($files) {
        $scope.profile.file = $files[0];
    };
    $scope.updateUser = function () {
        var requestData = {
            "email": $scope.profile.email,
            "dob": $scope.profile.dob,
            "status": $scope.profile.status,
            "user_id": $scope.profile._id,
            "username": $scope.profile.username
        };
        console.log(requestData);
        if ($scope.profile.file !== undefined) {

            $scope.upload = $upload.upload({
                url: supplementalApiUri + "/api/UpdateUserWithImage/" + requestData.username,
                method: 'POST',
                //headers: {'header-key': 'header-value'},
                //withCredentials: true,
                data: requestData,
                file: $scope.profile.file,
                //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] 
                // customize file formData name ('Content-Disposition'), server side file variable name. 
                //fileFormDataName: myFile, 
                //formDataAppender: function(formData, key, val){}
            }).progress(function (evt) {
                $scope.prog = 'percent: ' + parseInt(100.0 * evt.loaded / evt.total);
            }).success(function (data, status, headers, config) {
                // file is uploaded successfully
                $scope.getUser();
            });
            //.error(...)
            //.then(success, error, progress); 
            // access or attach event listeners to the underlying XMLHttpRequest.
            //.xhr(function(xhr){xhr.upload.addEventListener(...)})
        } else {
            $restAPIService.UpdateUserWithoutImage(requestData).success(function (data) {
                if (data !== null) {
                    console.log(data[0]);
                    $scope.getUser();
                } else {
                    alert('Please Enter correct username/password');
                }
            }).error(function (err) {
                alert(err);
            });
        }

    };
});