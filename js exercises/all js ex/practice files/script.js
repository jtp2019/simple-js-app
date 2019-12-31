///exercises 1.8......

var pokemonRepository = (function () { // Wraps repository within IIFE
var $container = document.querySelector('.container');
var $pokemonList = document.querySelector('ul'); // Creates variable for index 'ul' with pokemonList class
 $modalContainer = document.querySelector('#modal-container');
var repvarository = [];
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


 // Function to show details of each Pokemon
 function showDetails(pokemon) {
   pokemonRepository.loadDetails(pokemon).then(function () {
     showModal(pokemon);
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

  // Load details of each Pokemon if clicked
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

  // Function to visible, modal for each Pokemon
  (function() {
   var $modalContainer = document.querySelector('#modal-container');
  function showModal(title, text) { // Clear all existing modal content
    $modalContainer.innerHTML = '';
    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the closeButtonElement
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    // Add the name,img,height and types of each Pokemon
   var nameElement = document.createElement('h1');
   nameElement.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);

   var imageElement = document.createElement('img');
   imageElement.src = item.imageUrl;
   imageElement.classList.add('modal-img');

   var heightElement = document.createElement('p');
   heightElement.innerText = 'Height: ' + item.height + 'm';

   var typesElement = document.createElement('p');
   typesElement.innerText = 'Type(s): ' + item.types;


   modal.appendChild(closeButtonElement);
   modal.appendChild(nameElement);
   modal.appendChild(imageElement);
   modal.appendChild(heightElement);
   modal.appendChild(typesElement);
   $modalContainer.appendChild(modal);

   $modalContainer.classList.add('is-visible');
 }

  // Function to close the modal
    function hideModal() {
    $modalContainer.classList.remove('is-visible');
  }
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  // Press ESC key to close modal
    window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

    // Click outside of the modal to close them
  $modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

})();


 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   search: search,
   showDetails: showDetails,
   loadList: loadList,
   loadDetails: loadDetails,
   showModal: showModal,
   hideModal: hideModal
 };
})();

     // forEach Used To cycle through addListItem function properties
     pokemonRepository.loadList().then(function() {
       // Now the data is loaded
         pokemonRepository.getAll().forEach(function(pokemon) {
             pokemonRepository.addListItem(pokemon);

       });
     });
