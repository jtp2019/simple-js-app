///exercises 1.7......
var pokemonRepository = (function() {
    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //Function to add list for each pokemon object (old data from 1.6 exercise)......
    var $pokemonList = document.querySelector('ul');
    function addListItem(pokemon) {
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-name');
        listItem.appendChild(button);
        $pokemonList.appendChild(listItem)
        button.addEventListener('click', function() {
            showDetails(pokemon)
        })
    }

    //Function to load Pokemon list from API............................
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    //Function to load the detailed data for a given Pokémon..............
    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = Object.keys(details.types);
        }).catch(function(e) {
            console.error(e);
        });
    }

    //Function to add new Pokemon data ( develoed 1.6 ex).........
    function add(pokemon) {
        repository.push(pokemon);
    }
    function getAll() {
        return repository;
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

//Function to show details of each Pokemon.........
function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
        console.log(item);
        return item;
    }).then(function(item) {
        console.log(item);
    });
}

//Create list of the Pokemon with Pokemon's name on the button......
pokemonRepository.loadList().then(function() {
    // Now the data is loaded!........
    pokemonRepository.getAll().forEach(function(pokemon) {
        addListItem(pokemon);
    });
});
