/**
 * Created by hparry on 9/12/15.
 */

var workspaceApp = angular.module('WorkspaceApp', ['jsonFormatter', 'restangular']).config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl("http://localhost:8080/graphql/");

});

workspaceApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

workspaceApp.controller("TestController", function ($scope, Restangular) {
    var getWorkspaces = function () {
        Restangular.one('workspace').get().then(function (result) {
            $scope.workspaces = result.plain();
        });
    };
    $scope.workspaces = {"workspaces": "none"};

    getWorkspaces();
});


