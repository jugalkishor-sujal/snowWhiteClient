angular.module('snowWhite.admin_users', [
'ui.router',
  'restAPIService'
])

.config(function config($stateProvider) {
    $stateProvider.state('admin_users', {
        url: '/admin/users',
        views: {
            "main": {
                controller: 'adminUsersCtrl',
                templateUrl: 'admin/users/users.tpl.html'
            }
        },
        data: { pageTitle: 'adminUsers' }
    });
})

.controller('adminUsersCtrl', function adminUsersController($window, $rootScope, $scope, $translate, $location, $cookies, $q, $restAPIService, $upload, supplementalApiUri) {
    if ($scope.current.email !== undefined && $scope.current.email !== '') {
    //Local scope variables declaration & initialization
    $scope.users = $scope.users || {};
    $scope.profile = $scope.profile || {};
    $scope.profile.email = $scope.profile.email || '';
    $scope.profile.dob = $scope.profile.dob || '';
    $scope.profile.status = $scope.profile.status || '';
    $scope.profile.image_path = $scope.profile.image_path || '';
    $scope.files = $scope.files || '';
    //End Var Init

    //End getting data from API
    //Function to make a file upload request to POST data to API
    $scope.getUsers = function () {
        var deferred = $q.defer();
        // For getting profile data from API
        if ($scope.current.email !== undefined && $scope.current.email !== '') {
            var request = {};
            $restAPIService.GetUsers(request).success(function (data) {
                if (data !== null) {
                    $scope.users = data;
                } else {
                    alert('Data fetching error!!');
                }
            }).error(function (err) {
                alert(err);
            });
        }
        else {
            alert("session Expiered!!!");
        }
    };
    $scope.getUsers();
    $scope.deleteUser = function (id) {
        var deferred = $q.defer();
        // For getting profile data from API
        if ($scope.current.email !== undefined && $scope.current.email !== '') {
            var request = { "_id": id };
            $restAPIService.DeleteUser(request).success(function (data) {
                if (data !== null) {
                    $scope.users = data;
                    $scope.getUsers();
                } else {
                    alert('Data fetching error!!');
                }
            }).error(function (err) {
                alert(err);
            });
        }
        else {
            alert("session Expiered!!!");
        }
    };
    $scope.onFileSelect = function ($files) {
        $scope.profile.file = $files[0];
        console.log($scope.profile.file);
    };
    $scope.addUser = function () {
       
        if ($scope.profile.file !== undefined && $scope.profile.file !== '') {
            var requestData = {
            "username": $scope.profile.username,
            "password": $scope.profile.password,
            "email": $scope.profile.email,
            "role": $scope.profile.role,
            "dob": $scope.profile.dob,
            "status": $scope.profile.status
        };
                $scope.upload = $upload.upload({
                    url: supplementalApiUri + "/api/AddUser/" + requestData.username,
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
                    $scope.getUsers();
                    $scope.profile = {};
                });
                //.error(...)
                //.then(success, error, progress); 
                // access or attach event listeners to the underlying XMLHttpRequest.
                //.xhr(function(xhr){xhr.upload.addEventListener(...)})
        } else {

            alert("Select file to update!!!");
            }
    };
    }
else {
            alert("session Expiered!!!");
}

});
