angular.module('SinasanApp', [
  'ngRoute',
  'mobile-angular-ui',
  'SinasanApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});