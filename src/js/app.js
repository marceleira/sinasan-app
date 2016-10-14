angular.module('SinasanApp', [
  'ngRoute',
  'mobile-angular-ui',
  'SinasanApp.controllers.Main'
])
.factory('config', function() {
    //return {srv: "http://localhost:9090/sinasan-doacoes"};
    return {srv: "http://sinasan.us.to"};
})
.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/bolsa', {templateUrl:'bolsa.html',  reloadOnSearch: false});
});