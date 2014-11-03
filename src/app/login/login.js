angular.module('snowWhite.login', [
  'ui.router',
  'restAPIService'
])
.config(function config($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        views: {
            "main": {
                controller: 'LoginCtrl',
                templateUrl: 'login/login.tpl.html'
            }
        },
        data: { pageTitle: 'Login' }
    });
})
.controller('LoginCtrl', function LoginController($window, $rootScope, $scope, $translate, $location, $cookies, $restAPIService) {
    $scope.current.email = $scope.current.email || '';
    $scope.password = $scope.password || '';
    $scope.current.loginType = $scope.current.loginType ||0;
    $scope.doLogin = function () {
        if ($scope.current.email !== undefined && $scope.password !== undefined) {
            var request = { "email": $scope.current.email, "password": $scope.password };
            $restAPIService.LoginUser(request).success(function (data) {
                if (data !== null) {
                    console.log(data.result);
                    $scope.current.userImage = data.result.userImage;
                    $scope.current.userName = data.result.username;
					console.log('clear snow fall');
                    if (data.result.role === 1) {
                        $scope.current.loginType = 1;
                        $location.path("/admin/dashboard");
                    }
                    else if (data.result.role === 2) {
                        $scope.current.loginType = 2;
                        $location.path("/investor/dashboard");
                    }
                    else if (data.result.role === 3) {
                        $scope.current.loginType = 3;
                        $location.path("/user/dashboard");
                    }
                    else if (data.result.role === 4) {
                        alert(data.result.role);
                        $scope.current.loginType = 4;
                        $location.path("/operator/dashboard");
                    }
                } else {
                    $scope.current.email = "";
                    $scope.password = "";
                    alert('Please Enter correct username/password');
                }
            }).error(function (err) {
                alert(err);
            });
        }
    };
});