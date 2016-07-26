/**
 * Created by Jim on 7/6/2016.
 */
angular
    .module( 'preAuthApp', ['login', 'register', 'ui.router' ])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/login");
        //
        // Now set up the states
        $stateProvider
            .state('login', {
                url: '/login',
                component: 'login'
            })
            .state('register', {
                url: '/register',
                component: 'register'
            });
    });
    