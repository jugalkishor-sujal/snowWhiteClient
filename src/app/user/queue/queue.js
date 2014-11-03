
angular.module('snowWhite.user_queue', [
  'ui.router'
])

.config(function config($stateProvider) {
    $stateProvider.state('user_queue', {
        url: '/user/queue',
        views: {
            "main": {
                controller: 'userQueueCtrl',
                templateUrl: 'user/queue/queue.tpl.html'
            }
        },
        data: { pageTitle: 'Queue' }
    });
})

.controller('userQueueCtrl', function userQueueController($scope) {
    $scope.FileInfo = $scope.FileInfo || [];
    for (var i = 0; i < 5; i++) {
        var Obj = {};
        Obj.s_no = i + 1;
        Obj.Name = 'Name' + i + 1;
        Obj.Size = 'Size' + i + 1;
        Obj.Status = 'Status' + i + 1;
        Obj.Health = 'Health' + i + 1;
        Obj.Down_Speed = 'Down_Speed' + i + 1;
        Obj.Up_Speed = 'Up_Speed' + i + 1;
        Obj.ETA = 'ETA' + i + 1;
        Obj.Rating = 'Rating' + i + 1;
        Obj.Seeds_Peers = 'Seeds_Peers' + i + 1;
        Obj.Label = 'Label' + i + 1;
        Obj.Added = 'Added' + i + 1;
        Obj.Completed_On = 'Completed_On' + i + 1;
        $scope.FileInfo.push(Obj);
    }
    //$scope.onFileSelect = function ($files) {
    //    $scope.FileInfo = $files;
    //    //for (var i = 0; i < $files.length; i++) {
    //    //    var file = $files[i];
    //    //    file
    //    //    $scope.FileInfo.s_no;
    //    //    $scope.FileInfo.Name;
    //    //    $scope.FileInfo.Size;
    //    //    $scope.FileInfo.Status;
    //    //    $scope.FileInfo.Health;
    //    //    $scope.FileInfo.Down_Speed;
    //    //    $scope.FileInfo.Up_Speed;
    //    //    $scope.FileInfo.ETA;
    //    //    $scope.FileInfo.Rating;
    //    //    $scope.FileInfo.Seeds_Peers;
    //    //    $scope.FileInfo.Label;
    //    //    $scope.FileInfo.Added;
    //    //    $scope.FileInfo.Completed_On;
    //    //    ////$scope.upload = $upload.upload({
    //    //    ////    url: supplementalApiUri + "/api/file/add/investor",
    //    //    ////    method: 'POST',
    //    //    ////    //headers: {'header-key': 'header-value'},
    //    //    ////    //withCredentials: true,
    //    //    ////    data: { FileInfo: $scope.FileInfo },
    //    //    ////    file: file,
    //    //    ////    //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] 
    //    //    ////    // customize file formData name ('Content-Disposition'), server side file variable name. 
    //    //    ////    //fileFormDataName: myFile, 
    //    //    ////    //formDataAppender: function(formData, key, val){}
    //    //    ////}).progress(function (evt) {
    //    //    ////    $scope.FileInfo.Up_Speed = 'percent: ' + parseInt(100.0 * evt.loaded / evt.total);
    //    //    ////}).success(function (data, status, headers, config) {
    //    //    ////    // file is uploaded successfully
    //    //    ////    $location.path("/user/dashboard");
    //    //    ////});
    //    //    //////.error(...)
    //    //    //////.then(success, error, progress); 
    //    //    ////// access or attach event listeners to the underlying XMLHttpRequest.
    //    //    //////.xhr(function(xhr){xhr.upload.addEventListener(...)})
    //    //}
    //};
});