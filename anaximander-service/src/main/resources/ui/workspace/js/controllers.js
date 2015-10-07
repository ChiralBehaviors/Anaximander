/**
 * Created by hparry on 9/12/15.
 */

var controllers = angular.module('Controllers', ['jsonFormatter', 'restangular']);

controllers.config("RestangularProvider", function (RestangularProvider) {

    RestangularProvider.setBaseUrl("http://localhost:8080/graphql/");
});

 controllers.controller("WorkspaceController", function ($scope, Restangular) {
        $scope.testJson = { "workspace" : "emtpy"};

        var getWorkspaces = function () {
            Restangular.all('workspace').getList().then(function(result) {
                $scope.workspaces = result;
            });
        };
        $scope.workspaces = {"workspaces": "none"};

        getWorkspaces();


    });