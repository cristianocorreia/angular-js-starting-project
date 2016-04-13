(function () {
    'use strict';

    angular
    .module('')
    .config(Config);

    Config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

    function Config($urlRouterProvider, $stateProvider, $locationProvider) {

        $urlRouterProvider
        .otherwise('/');

        $locationProvider
        .html5Mode(true);

        $stateProvider
        .state('homepage', {
            url: '/',
            templateUrl: '',
            controller: '',
            controllerAs: ''
        });
    }

})();
