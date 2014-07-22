/* 
 * Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
 * TODO: Rename security to sharedModule
 */

angular.module('security', [
  'security.service',
  'security.interceptor',
  'security.login',
  'security.authorization']);
    

