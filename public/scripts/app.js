console.log('sanity check11');

angular
.module('pokemonApp',['ngRoute'])
.config(config);
console.log('sanity check');

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pokemonsindex.html',
      controller: 'pokemonsIndexController',
      controllerAs: 'pokemonsIndexCtrl'  
    })
    .when('/pokemons/:id', {
      templateUrl: 'templates/pokemonshow.html',
      controller: 'pokemonsShowController',
      controllerAs: 'pokemonsShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}