'use strict';

/**
 * @ngdoc overview
 * @name curtoTabuleiroApp
 * @description
 * # curtoTabuleiroApp
 *
 * Main module of the application.
 */
angular
  .module('curtoTabuleiroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
