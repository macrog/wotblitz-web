wotblitzApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                data: {
                    requiresLogin: false,
                    id:1
                },
                templateUrl: "views/home.html",
                controller: 'HomeCtrl'
            })
            .state('tankopedia', {
                url: "/tankopedia",
                data: {
                    requiresLogin: false,
                    id:2
                },
                templateUrl: "views/tankopedia.html"
                    //controller: 'HomeCtrl'
            })
            .state('contact', {
                url: "/contact",
                data: {
                    requiresLogin: false,
                    id:3
                },
                templateUrl: "views/contact.html"
                    //controller: 'HomeCtrl'
            });

        $urlRouterProvider.otherwise("home");
    })
    .config(function ($urlRouterProvider, $httpProvider, $stateProvider) {
        $urlRouterProvider.otherwise('home');

    })
    .run(function ($state, $rootScope) {
        $rootScope.$on('$stateChangeStart', function (e, to) {
            // manage selected link on a navbar state data.id have ti match navbar on rootScope properties
            var current = $state.current
            if(current.name === ""){
                $rootScope.navbar[to.data.id - 1].active = true;
            }else{
                var from = current.data.id;
                var to = to.data.id;
                if(current && to){
                    $rootScope.navbar[from - 1].active = false;
                    $rootScope.navbar[to - 1].active = true;
                }
            }
            //END - manage selected link on a navbar...
            console.log("$stateChangeStart");
            if (to.data && to.data.requiresLogin) {
                console.log("unauthorized");
                e.preventDefault();
                $state.go('login');
            }
        });
    });
