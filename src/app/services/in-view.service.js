(function () {
    'use strict';

    angular
        .module('')
        .service('InViewService', InViewService);

    InViewService.$inject = ['$timeout'];

    function InViewService($timeout) {

        var service = {
            inView: inView
        };

        return service;

        function inView($event, timeout) {
            var target = $event.inViewTarget,
                targetElement = angular.element(target),
                delayTime = 300;

            if (typeof (timeout) !== 'undefined') {
                delayTime = timeout * 150;
            }

            $timeout(function() {
                targetElement.addClass('in-view');
            }, delayTime, false);
        }

    }

})();
