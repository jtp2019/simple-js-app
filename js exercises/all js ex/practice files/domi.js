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

    var repository = pokemonRepository.getAll(); // forEach iterates over  Pokémon array
    repository.forEach(function(pokemon) {
        console.log(pokemon);
        if (pokemon.height > 10) {
            document.write(pokemon.name);
        } else {
            document.write(pokemon.name + "<br>");
        }

        function add(pokemon) {
            repository.push(pokemon);
        }

    // Function used to return Pokemon object array
     function getAll() {
       return repository;
     }

     // Create a function 'addListItem'
        function addListItem(pokemon) {
        var listItem = document.createElement('li');  // create an li element that contains a button for each Pokémon
        var button = document.createElement('button'); // Adds Pokemon name to text within button
        button.innerText = pokemon.name;//	Set the innerText of the button to be the Pokémon's name
        button.classList.add('pokemon-name');  // Adds a CSS class to button using classList.add method
        listItem.appendChild(button);  // Adds the button element to the 'li'// append the button to the list item as its child.
        $pokemonList.appendChild(listItem); // Adds the 'li' to 'ul' with pokemonList class in index file //append the list item to the unordered list as its child
        button.addEventListener('click', function(event) {
        showDetails(pokemon)   // Calls showDetails function when button is clicked
        });
      }

      // Logs selected Pokemon on console
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

     // forEach Used To cycle through addListItem function properties
     pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
  });







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
      if (pokemon.height > 10) {
          document.write(pokemon.name);
      } else {
          document.write(pokemon.name + "<br>");
      }

      function addListItem(pokemon) {
          var $container = document.querySelector('.container');
          var button = document.createElement('button');
          button.innerText = "Test";
          $container.appendChild(button);
          button.classList.add('pokemon-name');
          $element.classList.toggle('container');

          var $pokemonList = document.querySelector('ul');
          var listItem = document.createElement('li');
          $pokemonList.appendChild(listItem);
          button.addEventListener('click', function(event) {
              showDetails(pokemon);
              console.log(event);
          });
      }
  });

  pokemonRepository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
  });


  // Wraps repository within IIFE
  var pokemonRepository = (function () {
   // Creates variable for index 'ul' with pokemonList class
   var $pokemonList = document.querySelector('.pokemonList');
   var repository = [
    {
      name: "Bulbasaur",
      type: ['Grass', ' Poison'],
      stage: 1
    },
    {
      name: "Ivysaur",
      type: ['Grass', ' Poison'],
      stage: 2
    },
    {
      name: "Venusaur",
      type: ['Grass', ' Poison'],
      stage: 3
    }
   ];

  // Adds new Pokemon to var repository
   function add(pokemon) {
     var expectedProps = ['name', 'type', 'stage'];
  // Checks if the input is an object and keys are as expected
     if (typeof pokemon === 'object' && Object.keys(pokemon).join() ===
   expectedProps.join()) {
     repository.push(pokemon); // If yes, push new Pokemon
   } else { // If no, user sees this message below
     throw new Error('Invalid Pokemon input received')
   }
  }

  //Function to add new Pokemon data
  function add(pokemon){
    //Must be an 'object' type
    if (typeof pokemon !== 'object'){
      return 'Not a valid input'
    }else{
    repository.push(pokemon);
    }
  }




  // Function used to return Pokemon object array
   function catchAll() {
     return repository;
   }

   function addListItem(pokemon) {
     var listItem = document.createElement('li');
     var button = document.createElement('button');
     // Adds Pokemon name to text within button
     button.innerText = pokemon.name;
     // Adds a CSS class to button using classList.add method
     button.classList.add('pokemon-name');
     // Adds the button element to the 'li'
     listItem.appendChild(button);
     // Adds the 'li' to 'ul' with pokemonList class in index file
     $pokemonList.appendChild(listItem);
     // Calls showDetails function when button is clicked
     button.addEventListener('click', function(event) {
       showDetails(pokemon)
     });
   }

   // Logs selected Pokemon on console
   function showDetails(pokemon) {
     console.log(pokemon);
   }

   return {
     add: add,
     catchAll: catchAll,
     addListItem: addListItem,
     };
  })();

  // forEach Used To cycle through addListItem function properties
  pokemonRepository.catchAll().forEach(function(pokeList) {
   pokemonRepository.addListItem(pokeList);
  });


  Jacqueline I dowload the 1.6 exercise you have to add this in the commit it is the easier way for all.
  Apart from that you declaring a function but never you use
  `function addListItem(pokemon) {
  var $container = document.querySelector('.container');
  var button = document.createElement('button');
  button.innerText = "Test";
  $container.appendChild(button);
  button.classList.add('pokemon-name');
  $element.classList.toggle('container');

  var $pokemonList = document.querySelector('ul');
  var listItem = document.createElement('li');
  $pokemonList.appendChild(listItem);
  button.addEventListener('click', function(event) {
  showDetails(pokemon);
  console.log(event);
  });
  }`
  also inside that function you are using showdetails that is in other file
   but you never include this file.
    for that you have to use iimport and export function or include in the main html file.
     Hope the last comment helps!
  Please if you are missing something just let me know!
  // Wraps repository within IIFE
  var pokemonRepository = (function () {
   // Creates variable for index 'ul' with pokemonList class
   var $pokemonList = document.querySelector('.pokemonList');
   var repository = [];
   var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Adds new Pokemon to var repository
   function add(pokemon) {
     repository.push(pokemon);
   }


  // Function used to return Pokemon object array
   function catchAll() {
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

   function addListItem(pokemon) {
     var listItem = document.createElement('li');
     var button = document.createElement('button');
     // Adds Pokemon name to text within button
     button.innerText = pokemon.name;
     // Adds a CSS class to button using classList.add method
     button.classList.add('pokemon-name');
     // Adds the button element to the 'li'
     listItem.appendChild(button);
     // Adds the 'li' to 'ul' with pokemonList class in index file
     $pokemonList.appendChild(listItem);
     // Calls showDetails function when button is clicked
     button.addEventListener('click', function(event) {
       showDetails(pokemon)
     });
   }

   // Logs selected Pokemon on console
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
     catchAll: catchAll,
     addListItem: addListItem,
     search: search,
     loadList: loadList,
     loadDetails: loadDetails
   };
  })();

  // forEach Used To cycle through addListItem function properties
  pokemonRepository.loadList().then(function() {
    // Now the data is loaded
    pokemonRepository.catchAll().forEach(function(pokeList) {
      pokemonRepository.addListItem(pokeList);
    });
  });
