wotblitzApp.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
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
}]);
