/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var ALZAPP = ALZAPP || {};
ALZAPP.SUGGESTION_CAP = 6;
(function(app){

    angular.module('contactModule', [])
        .controller('contactController', ['$scope', function($scope){
            var suggestionCap = 2;
            $scope.addresses = [
                {
                    'address1': 'Herrenstrasse 48',
                    'address2': '',
                    'address3': '',
                    'postcode': '79098',
                    'city': 'Freiburg'
                },
                {
                    'address1': 'Konviktstrasse 24',
                    'address2': '',
                    'address3': '',
                    'postcode': '78098',
                    'city': 'Colmar'
                },
                {
                    'address1': 'Karlstrasse 12',
                    'address2': '',
                    'address3': '',
                    'postcode': '77098',
                    'city': 'Karlsruhe'
                }
            ];
            $scope.$watch(
                'postcodeInputFragment',
                function(){
                    /*console.log('siloAddresses being called :-)');*/
                    $scope.siloAddresses();
                }
            );
            $scope.siloAddresses = function(){
                // Returns all addresses or capped version for an input of nothing
                $scope.postcodeInputFragment = $scope.postcodeInputFragment === "" ? undefined : $scope.postcodeInputFragment;
                var jsonSilo = _.filter(
                    $scope.addresses,
                    function(ele){
                        return _.contains(ele.postcode, $scope.postcodeInputFragment);
                    }
                );
                $scope.addressSuggestions = _.first(jsonSilo, app.SUGGESTION_CAP); // Trigger for showing address suggestions
            }
            $scope.selectAddress = function(address){
                $scope.selectedAddress = address;
                $scope.postcodeInputFragment = undefined;
            }
        }]);
}(ALZAPP));
