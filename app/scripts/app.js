'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){

    angular.module('alzApp', [
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
        .config(['$locationProvider', function($locationProvider){
            $locationProvider
                .html5Mode(true);
            }
        ]);
}());
