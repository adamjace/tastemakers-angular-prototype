// global object
var global = {};

var app = angular.module('kent', [
    'ngRoute'
]);

// routing
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/create', {
        templateUrl: 'views/create.html'
    })
    .when('/live', {
        templateUrl: 'views/events.html'
    })
    .when('/mediaItem', {
        templateUrl: 'views/mediaItem.html'
    })
    .otherwise({
        redirectTo: '/'
    });

}]);
