var app = angular.module('appDemo', [])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller : 'login',
        templateUrl: '/view/login.html'
      })
      .when('/lista', {
        controller : 'listaAmigos',
        templateUrl: '/view/listaAmigos.html'
      })
      .when('/perfil', {
        controller : 'perfil',
        templateUrl: '/view/perfil.html'
      })
      .otherwise({ redirectTo: '/' });
  });


//Login
app.controller('login', function ($scope, $location) {
  $scope.enviar = function () {
    $location.path('/lista');
  };
});


//Lista de amigos
app.controller('listaAmigos', function ($scope) {
  $scope.friends = [
    { name: 'David',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/' },
    { name: 'Erico',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/1' },
    { name: 'Sheldon', invited: false, thumb: 'http://lorempixel.com/50/50/sports/2' },
    { name: 'João',    invited: false, thumb: 'http://lorempixel.com/50/50/sports/3' },
    { name: 'Fábio',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/4' },
    { name: 'Marcos',  invited: false, thumb: 'http://lorempixel.com/50/50/sports/5' },
    { name: 'David',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/6' },
    { name: 'Erico',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/7' },
    { name: 'Sheldon', invited: false, thumb: 'http://lorempixel.com/50/50/sports/8' },
    { name: 'João',    invited: false, thumb: 'http://lorempixel.com/50/50/sports/9' },
    { name: 'Fábio',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/10' }
  ];
});


//Detalhes
app.controller('perfil', function ($scope) {
  $scope.info = {
    name   : 'Vitor Leal',
    address: 'Rua Lorem Ipsum Dolor 902',
    job    : 'Analista de Sistemas Senior',
    age    : '28',
    thumb  : 'http://lorempixel.com/120/120/sports/'
  };

  $scope.back= '#/lista';
});
