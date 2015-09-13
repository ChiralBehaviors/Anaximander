/**
 * Created by hparry on 9/12/15.
 */

angular.module('Controllers', ['jsonFormatter']).
    controller("WorkspaceController", function ($scope) {
        $scope.testJson = {
            "@context": {"definingProduct": "@id", "keys": "@id"},
            "@graph": [{
                "@id": "json-ld/workspace/",
                "definingProduct": {
                    "@id": "http://localhost:8080/json-ld/facet/Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006/00000000-0000-0004-0000-000000000003",
                    "@type": "http://localhost:8080/json-ld/facet/Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006"
                },
                "keys": "json-ld/workspace/00000000-0000-0004-0000-000000000003/key"
            }, {
                "@id": "json-ld/workspace/",
                "definingProduct": {
                    "@id": "http://localhost:8080/json-ld/facet/Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006/c34f9d45-8b02-5de3-bb7c-02411e120bc1",
                    "@type": "http://localhost:8080/json-ld/facet/Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006"
                },
                "keys": "json-ld/workspace/c34f9d45-8b02-5de3-bb7c-02411e120bc1/key"
            }]
        };

    });