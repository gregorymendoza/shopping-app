var myAngularApp = angular.module('navigation', ['ngRoute']);

myAngularApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/' , {      
        templateUrl: 'templates/main.html',
        controller: 'main'
    })
    .when('/confirmation', {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmation'
    })
    .when('/404', {
        templateUrl: 'templates/404.html',
        controller: 'main'
    })
    .otherwise({        
        redirectTo: '/404'        
    });
    
}]);