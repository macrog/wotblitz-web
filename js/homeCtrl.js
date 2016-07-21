wotblitzApp.controller('HomeCtrl', ['$scope', '$http', 'constFactory', function ($scope, $http, constFactory) {
    $scope.user = {};
    $scope.data = {
        model: null,
        availableRegions: [
            {id: '1', name: 'Europe'}          
            ]
    };

    $scope.search = function(user, region) {
      debugger;  
    };
    $scope.about_description = constFactory.getAboutWebPage();   
    $scope.wn8_description = constFactory.getWN8Desc();
}]);
