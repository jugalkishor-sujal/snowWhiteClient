angular.module('restAPIService', []).factory('$restAPIService', [
    '$http', 'supplementalApiUri',
    function ($http, supplementalApiUri) {
        ApiUrl = supplementalApiUri + "/api/";

        return {
            test: function (request) {
                var Requesturl = supplementalApiUri + "/user/get/list";
                return this.Get(Requesturl, request);
            },

            LoginUser: function (request) {
                var Requesturl = ApiUrl + "LoginUser";
                return this.Post(Requesturl, request);
            },
            AddUser: function (request) {
                var Requesturl = ApiUrl + "AddUser/" + request._id;
                return this.Post(Requesturl, request);
            },
            DeleteUser: function (request) {
                var Requesturl = ApiUrl + "DeleteUser/" + request._id;
                return this.Delete(Requesturl, request);
            },
            UpdateUserWithoutImage: function (request) {
                var Requesturl = ApiUrl + "UpdateUserWithoutImage/" + request.user_id;
                return this.Post(Requesturl, request);
            },
            UpdateUserWithImage: function (request) {
                var Requesturl = ApiUrl + "UpdateUserWithImage/" + request._id;
                return this.Post(Requesturl, request);
            },
            
            GetUsers: function (request) {
                var Requesturl = ApiUrl + "GetUsers";
                return this.Get(Requesturl, request);
            },
            GetUsernames: function (request) {
                var Requesturl = ApiUrl + "GetUsernames";
                return this.Get(Requesturl, request);
            },
            GetProfileInfo: function (request) {
                var Requesturl = ApiUrl + "GetProfileInfo/" + request.email;
                return this.Get(Requesturl, "");
            },
            GetUserFiles: function (request) {
                var Requesturl = ApiUrl + "file/list/"+request.name;
                return this.Get(Requesturl, request);
            },
            uploadUserFiles: function(Message){
                return $http({
                    method:'POST',
                    url:serverUrl+"file/add/"+request.name,
                    data:Message,
                    file:$file
                });
            },
           
        Post: function (ResultUrl, RequestParameterData) {
                    var PostResponse = $http({
                        url: ResultUrl,
                        method: "POST",
                        data: RequestParameterData
                    });
                    return PostResponse;
                },
        Get: function (ResultUrl, RequestParameterData) {
            var PostResponse = $http({
                url: ResultUrl,
                method: "GET",
                params: RequestParameterData
            });
            return PostResponse;
        },
        Delete: function (ResultUrl, RequestParameterData) {
            var PostResponse = $http({
                url: ResultUrl,
                method: "DELETE",
                params: RequestParameterData
            });
            return PostResponse;
        }
        };
    } ]);