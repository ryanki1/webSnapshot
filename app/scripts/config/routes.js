/* 
 * Routes
 */

'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    
    angular.module('alzApp')
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/login2Contact-web', {
                    controller: 'contactController'
                })
                .when('/contact', {
    //                templateUrl: 'module/contact/view/contact.html',
                    controller: 'contactController',
                    resolve: {
                        loadContactPage: ['securityAuthorization', function(authorization){
                            return authorization.requireAdminUser();
                        }]
                    }
                })
                .when('/fred', {
                    controller: 'fredController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
}());
