// exercise 1.5.......
// 1st METHOD

var pokemonRepository = (function() {
    var repository = [{
        name: 'Bulbasaur',
        height: 0.7,
        types: 'grass and poison'
    }, {
        name: 'Jigglypuff',
        height: 0.1,
        types: 'normal and fairy'
    }, {
        name: 'Lapras',
        height: 0.8,
        types: 'water and ice'
    }];
    return {
        add: function(items) {
            repository.push(items);
        },
        getAll: function() {
            return repository;
        }
    };
})();
console.log(pokemonRepository.getAll());
pokemonRepository.add({
    name: 'Pikachu',
    height: 0.4,
    types: 'electr'
});
console.log(pokemonRepository.getAll());

// 2nd METHOD

    function add(items) {
        repository.push(items);
    }
    function getAll() {
        return repository;
    }
    return {
        add: add,
        getAll: getAll
    };
})();
console.log(pokemonRepository.getAll());
pokemonRepository.add({
    name: "Pikachu",
    height: 0.4,
    types: "electr"
});
console.log(pokemonRepository.getAll());

// forEach LOOP

var repository = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: 'grass and poison'
    },
    {
    name: 'Jigglypuff',
    height: 0.1,
    types: 'normal and fairy'
    },
    {
    name: 'Lapras',
    height: 0.8,
    types: 'water and ice'
    }
 ];

 // forEach method... developed
  repository.forEach(function(pokemon, i, pokemonList) {
    console.log(`${i + 1}: ${pokemon.text}`);
    console.log(pokemonList);
  });

 // forEach method... previous
  repository.forEach(function(repository) {
   document.write(repository.name + '<br>');
   });

//object.keys METHOD........

Object.keys(repository).forEach(function(property) {
console.log(property);
console.log(repository[property]);
});

// Filter METHOD........(1st )

  var repository = [{
        name: 'Bulbasaur',
        height: 0.7,
        types: 'grass and poison'
    }, {
        name: 'Jigglypuff',
        height: 0.1,
        types: 'normal and fairy'
    }, {
        name: 'Lapras',
        height: 0.8,
        types: 'water and ice'
    },  {
        name: 'Pikachu',
        height: 0.4,
        types: 'electr'
    }];

    var pokemonList = repository
      .map(function(pokemon) {
        return { name: pokemon["name"], height: pokemon["height"] };
      })
      .filter(pokemon => pokemon.height >= 0.7);
    console.log(pokemonList);


// (3ard)single filter method

var repository = ['Bulbasaur','Jigglypuff','Lapras','Pikachu']
function pokemonList(name, query) {
  return name.filter(function(pokemon) {
      return pokemon.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}
console.log(pokemonList(repository, 'ff'));
console.log(pokemonList(repository, 'as'));
