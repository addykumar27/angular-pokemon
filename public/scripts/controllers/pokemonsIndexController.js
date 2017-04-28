angular
  .module('pokemonApp')
  .controller('pokemonsIndexController', pokemonsIndexController);


pokemonsIndexController.$inject=['$http'];
function pokemonsIndexController($http) {
  var vm = this;
  console.log('show pokemon');
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'
  }).then(onpokemonsIndexSuccess, onError)

  function onpokemonsIndexSuccess(response){
    console.log('heres the get all pokemons response data', response.data);
    vm.pokemons = response.data.pokemons;
  }
  function onError(error){
    console.log('theres an error: ', error);
  }
};

 
