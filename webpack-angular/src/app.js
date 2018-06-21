import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import home from './app/home/';

angular.module('app', [uirouter, home])
    .config(routing);










/*const config = ($routeProvider) => {
    $routeProvider.when('/items', {
        templateUrl: './app/items/items.html',
    }).when('/home', {
        templateUrl: require('./app/home/home.html'),
    }).otherwise({
        redirectTo: '/home',
    });
};

const app = angular.module('myApp', [
    require('angular-route')
])
    .config(config)

    .name;*/



/*app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "D1oe";
});

export default app;
*/
