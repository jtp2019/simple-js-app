//Exercise 1.6.......

var pokemonRepository = (function () {
  var repository = [{
    name: 'Bulbasaur',
    height: 7,
    types: 'grass and poison',
  }, {
    name: 'Jigglypuff',
    height: 1,
    types: 'normal and fairy',
  }, {
    name: 'Lapras',
    height: 8,
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
  height: 4,
  types: 'electr',
});
console.log(pokemonRepository.getAll());

    const repository = pokemonRepository.getAll();

    repository.forEach(function(pokemon) {


    console.log(pokemon);

    if(pokemon.height > 10)
    {
    document.write(pokemon.name );

    }
    else {
    document.write(pokemon.name + "<br>");
    }
    });
        var $pokemonList = document.querySelector('ul');
        function addListItem(pokemon) {
            var listItem = document.createElement('li');
            var button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemon-name');
            $element.classList.toggle('container');
            listItem.appendChild(button);
            $pokemonList.appendChild(listItem);
            button.addEventListener('click', function(event) {
                showDetails(pokemon);
            console.log(event);
            });
        }
