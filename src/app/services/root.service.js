(function() {
    'use strict';

	angular
        .module('')
        .service('RootService', RootService);

    RootService.$inject = ['$http', '$q'];

    function RootService($http, $q) {

        var service = {
            fetchData: fetchData
        };

        return service;

        function fetchData(api) {
            var def = $q.defer();

            $http.get(api)
            .success(function(data) {
                def.resolve(data);
            })
            .error(function() {
                def.reject('error');
            });

            return def.promise;
        }
    }

})();
