wotblitzApp.controller('AppCtrl', ['$rootScope','$scope', '$http', function ($rootScope, $scope, $http) {
    
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
}]);