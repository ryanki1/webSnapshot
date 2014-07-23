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
                .when('/', {
                    controller: 'contactController'
                })
                .when('/contact', {
                    templateUrl: '/scripts/module/contact/view/contact.html',
                    controller: 'contactController'
/*                    resolve: {
                        loadcontactpage: ['securityauthorization', function(authorization){
                            return authorization.requireadminuser();
                        }]
                    }*/
                })
                .when('/fred', {
                    controller: 'fredController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
}());
