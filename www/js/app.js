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
        controller: "updateProjectController"
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
        controoler: "mainController"
    });
    $urlRouterProvider.otherwise("mesProjets");
});

app.factory('StorageService', function($localStorage) {
    var _getAllProjects = function() {
        return $localStorage.projects;
    };
    var _addProject = function(project) {
        $localStorage.projects.push(project);
    }
    var _removeProject = function(project) {
        $localStorage.projects.splice($localStorage.projects.indexOf(project), 1);
    }
    return {
        getAllProjects: _getAllProjects,
        addProject: _addProject,
        removeProject: _removeProject
    };
});
app.controller('updateProjectController', function($scope, $state, StorageService, $localStorage) {
    $scope.projects = $localStorage.projects;
    $scope.project = {
        name: null,
        date: new Date(),
        cousineAutre: null,
        profil: {
            name: null,
            coleur: null
        },
        listPieces: []
    };
    $scope.validerProjet = function() {
        if ($scope.project.cousineAutre == 'Autre') {
            $state.go("updateItem", {});
            $localStorage.project = $scope.project;
        }
    };
});

app.controller('updateItemController', function($scope, $rootScope, $state, StorageService, $localStorage) {
    $scope.piece = {
        name: null,
        typePiece: null,
        with: null,
        height: null,
        nombre: null
    };

    $scope.saveItem = function() {
        $scope.listPieces = [];

        $scope.listPieces = $localStorage.listPieces;
        // alert("ha la piece li 3mrat daba " + $scope.piece);
        console.log($localStorage.project);
        $scope.projectCreer = $localStorage.project;
        // $localStorage.projects = $localStorage.projects || [];
        $scope.projectCreer.listPieces.push($scope.piece);
        $rootScope.listPieces = $scope.projectCreer.listPieces;
        $localStorage.listPieces = $rootScope.listPieces;
        alert($scope.listPieces.length);
        // alert('le nmbre des pieces de projet' + $scope.listPieces.length);

        //$localStorage.projects.push($scope.projectCreer);
        //console.log($localStorage.projects);
        //$scope.projects = $localStorage.projects;
        //StorageService.addProject($scope.project);
        $state.go("projetItems", {});

    };

    $scope.ajouterUneAutrePiece = function() {
        $scope.piece = {
            name: null,
            typePiece: null,
            with: null,
            height: null,
            nombre: null
        };
        $state.go("updateItem", {});
    };
    $scope.listPieces = $localStorage.listPieces;
    alert($localStorage.listPieces);

});