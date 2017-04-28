angular
  .module('pokemonApp')
  .controller('pokemonsShowController', pokemonsShowController);
 

pokemonsShowController.$inject=['$http', '$routeParams', '$location'];
function pokemonsShowController($http, $routeParams, $location) {
  var vm = this;
  var pokemonId = $routeParams.id;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'+pokemonId
  }).then(onpokemonShowSuccess, onError);


  function onpokemonShowSuccess(response){
    console.log('here\'s the data for pokemon', pokemonId, ':', response.data);
    vm.pokemon = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }

   vm.editpokemon = function(pokemon) {
    console.log('updating pokemon: ', pokemon);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
      data: {
        name : pokemon.name,
        pokedex : pokemon.pokedex,
        image : pokemon.image,
        evolves_from : pokemon.evolves_from
      }
    }).then(onpokemonUpdateSuccess, onError);

    function onpokemonUpdateSuccess(response){
      console.log('here\'s the UPDATED data for pokemon', pokemonId, ':', response.data);
      vm.pokemon = response.data;
      $location.path('/');
    }
  };

  vm.deletepokemon = function (pokemon) {
    console.log('are you sure you want to delete');
    $http ({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/pokemon/'+pokemon._id,
    }).then(onpokemonDeleteSuccess, onError);

    function onpokemonDeleteSuccess(res) {
      console.log('pokemon delete resposne data:', response.data);
      $location.path('/');
    }
  };
}
 