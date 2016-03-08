var wotblitzApp = angular.module('wotblitzApp', ['ui.router']);

wotblitzApp.controller('AppCtrl', ['$rootScope','$scope', '$http', function ($rootScope, $scope, $http) {
    //console.log("Hello World from controller");
    $rootScope.navbar = [
        {
            href: "#home",
            name: "Home",
            active: false,
            id:1
        },
        {
            href: "#tankopedia",
            name: "Tankopedia",
            active: false,
            id:2
        },
        {
            href: "#contact",
            name: "Contact",
            active: false,
            id:3
        }
    ];

    $scope.isActive = function(obj){
        if(obj.active){
            return 'active';
        }else{
            return '';
        }
    };
}])
.directive('navBar', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/navbar.html'
    };
});;
