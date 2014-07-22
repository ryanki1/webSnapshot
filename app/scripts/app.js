'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular('alzApp', [
    /*
     * TODO: rename security.login to loginModule
     */
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'security.login',
    'contactModule',
    'security'
])
    .config(function($routeProvider){
        $routeProvider
            .when('/contact', {
                templateUrl: '/app/module/contact/view/contact.html',
                controller: 'contactController',
                resolve: 'requireAdminUser'
            })
            .otherwise({
              redirectTo: '/'
            });
    });


