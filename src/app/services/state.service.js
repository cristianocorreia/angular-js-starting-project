(function() {
    'use strict';

    angular
        .module('')
        .service('StateService', StateService);

    StateService.$inject = ['$state'];

    function StateService($state) {

        var service = {
            getCurrentState: getCurrentState
        };

        function getCurrentState() {
            return $state.$current.name;
        }

        return service;
    }

})();
