// exercise 1.5.......
// Lecture recomended METHOD

var pokemonRepository = (function () {
  var repository = [{
    name: 'Bulbasaur',
    height: 0.7,
    types: 'grass and poison',
  }, {
    name: 'Jigglypuff',
    height: 0.1,
    types: 'normal and fairy',
  }, {
    name: 'Lapras',
    height: 0.8,
    types: 'water and ice',
  }];

  function add(pokemon) {
    repository.push(pokemon);
  }
  function getAll() {
    return repository;
  }
  return {
    add: add,
    getAll: getAll
  };
}());

pokemonRepository.add({
  name: 'Pikachu',
  height: 0.4,
  types: 'electr',
});
console.log(pokemonRepository.getAll());

const repository = pokemonRepository.getAll();
repository.forEach(function(pokemon) {
  console.log(pokemon);
 });


// //Extra task Filter METHOD........(1st )
//
//   var repository = [{
//         name: 'Bulbasaur',
//         height: 0.7,
//         types: 'grass and poison'
//     }, {
//         name: 'Jigglypuff',
//         height: 0.1,
//         types: 'normal and fairy'
//     }, {
//         name: 'Lapras',
//         height: 0.8,
//         types: 'water and ice'
//     },  {
//         name: 'Pikachu',
//         height: 0.4,
//         types: 'electr'
//     }];
//
//     var pokemonList = repository
//       .map(function(pokemon) {
//         return { name: pokemon["name"], height: pokemon["height"] };
//       })
//       .filter(pokemon => pokemon.height >= 0.7);
//     console.log(pokemonList);
//
//
// // (2nd)single filter method
//
// var repository = ['Bulbasaur','Jigglypuff','Lapras','Pikachu']
// function pokemonList(name, query) {
//   return name.filter(function(pokemon) {
//       return pokemon.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   })
// }
// console.log(pokemonList(repository, 'ff'));
// console.log(pokemonList(repository, 'as'));
