// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngStorage'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("updateProjet", {
        url: "/updateProjet",
        templateUrl: "templates/updateProject.html",
        controller: "updateProjetController"
    });
    $stateProvider.state("mesProjets", {
        url: "/mesProjets",
        templateUrl: "templates/mesProjets.html",

    });
    $stateProvider.state("updateItem", {
        url: "/updateItem",
        templateUrl: "templates/updateItem.html",
        controller: "updateItemController"
    });
    $stateProvider.state("contact", {
        url: "/contact",
        templateUrl: "templates/contact.html"
    });
    $stateProvider.state("projetItems", {
        url: "/projetItms",
        templateUrl: "templates/projetItems.html",
        controoler: "projetItemControoler"
    });
    $urlRouterProvider.otherwise("mesProjets");
});

app.controller('updateProjetController', function($scope, $state) {
    $scope.validerProjet = function() {
        $state.go("updateItem", {});
    };

});
app.controller('updateItemController', function($scope, $state) {
    $scope.saveItem = function() {
        $state.go("projetItems", {});
    };
    app.controller('projetItemControoler', function($scope) {
        $scope.addItem = function() {

        };
    });


});