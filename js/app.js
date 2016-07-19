var wotblitzApp = angular.module('wotblitzApp', ['ui.router'])
.directive('navBar', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/navbar.html'
    };
});;
