(function() {
    'use strict';

    angular
        .module('')
        .run(Run);

    Run.$inject = ['$rootScope', '$state', '$stateParams'];

    function Run($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();
