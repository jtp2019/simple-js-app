//Exercise 1.6.......

var pokemonRepository = (function () { // Wraps repository within IIFE
var $pokemonList = document.querySelector('ul');  // Creates variable for index 'ul' with pokemonList class
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

    // Function used to return Pokemon object array
     function getAll() {
       return repository;
     }

     // Create a function 'addListItem'
        function addListItem(pokemon) {
        var listItem = document.createElement('li');  // create li element that contains a button for each Pokémon
        var button = document.createElement('button'); // Adds Pokemon name to text within button
        button.innerText = pokemon.name;//	Set the innerText of the button to be the Pokémon's name
        button.classList.add('pokemon-name');  // Adds a CSS class to button using classList.add method
        listItem.appendChild(button);  // Adds the button element to the 'li'// append the button to the list item as its child.
        $pokemonList.appendChild(listItem); // Adds the 'li' to 'ul' with pokemonList class in index file //append the list item to the unordered list as its child
        button.addEventListener('click', function(event) {
        showDetails(pokemon)   // Calls showDetails function when button is clicked
        });
      }


      // Function to show details of each Pokemon
      function showDetails(pokemon) {
        console.log(pokemon);
      }

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
        };
     })();

  pokemonRepository.add({
  name: 'Pikachu',
  height: 4,
  types: 'electr',
});
console.log(pokemonRepository.getAll());

// forEach Used To cycle through addListItem function properties
     pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
       document.write('Name:' + pokemon.name + '<br>',  'Height:' + pokemon.height + '<br>', 'Type:' + pokemon.types + '<br>');

  });
