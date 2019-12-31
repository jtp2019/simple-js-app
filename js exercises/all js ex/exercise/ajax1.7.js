///exercises 1.7......

var pokemonRepository = (function () { // Wraps repository within IIFE
var $pokemonList = document.querySelector('ul');  // Creates variable for index 'ul' with pokemonList class
var repository = [];
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// Adds new Pokemon to var repository
 function add(pokemon) {
   repository.push(pokemon);
 }


// Function used to return Pokemon object array
 function getAll() {
   return repository;
 }

// Function to search repository for Pokemon
 function search(searchName) {
   repository.filter(function(pokemon) {
     if (pokemon.name === searchName) {
       return pokemon;
     }
  });
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


      function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
      }

     // Loading data from an external API
      function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            var pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) { // Now we add details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = Object.keys(details.types);
        }).catch(function (e) {
          console.error(e);
        });
      }

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        search: search,
        loadList: loadList,
        loadDetails: loadDetails
      };
     })();

     // forEach Used To cycle through addListItem function properties
     pokemonRepository.loadList().then(function() {
       // Now the data is loaded
         pokemonRepository.getAll().forEach(function(pokemon) {
         pokemonRepository.addListItem(pokemon);
       });
     });
