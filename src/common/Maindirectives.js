/* Directives */

angular.module('snowWhite.Maindirectives',[])

.directive('leftmodule', function () {
 return {
templateUrl: 'office/event/module/leftmodule.tpl.html',
scope: true,
restrict: 'E'
 };
})
