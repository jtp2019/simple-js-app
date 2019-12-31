var repository = [
  {
  name: "Bulbasaur",
  height: "0.7",
  types: ["grass", "poison"]
  },
  {
  name: "Jigglypuff",
  height: "0.1",
  types: ["normal", "fairy"]
  },
  {
  name: "Lapras",
  height: "0.8",
  types: ["water", "ice"]
  }
 ];

printArrayDetails function declaration
function printArrayDetails(){
  for (var i = 0; i < repository.length; i++){
  document.write("<p>" + repository[i].name + "</p>");
  printing repository[i]’s other details
  }
}

var myArr = [1,2,3,4];

myArr.forEach(function(elem){
  if (elem === 3) {

      return true;

    // Go to "next" iteration. Or "continue" to next iteration...
  }

  console.log(elem);
});

const myArray = [{x:100}, {x:200}, {x:300}];

myArray.forEach((element, index, array) => {
    console.log(element.x); // 100, 200, 300
    console.log(index); // 0, 1, 2
    console.log(array); // same myArray object 3 times
});




varname.forEach(function(functionName)
{ if () { document.write(functionName.property + functionname.property)
} else {document.write() } });

printArrayDetails function declaration
function printArrayDetails(){
repository.forEach(function(currentItem){
document.write('<p>' + currentItem + '</p>');
printing repository[i]’s other details
  }
}
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
})();

pokemonRepository.add({
    name: "Pikachu",
    height: 0.4,
    types: "electr"
});
console.log(pokemonRepository.getAll());
var repository = pokemonRepository.getAll();

repository.forEach(function(pokemon) {
    console.log(pokemon.name);
    console.log(pokemon);

    });






const pokemonList = pokemonRepository.getAll();
    pokemonList.forEach(function(pokemon) {
            console.log(pokemon);
            console.log(pokemon.name);
            });

            const repository = pokemonRepository.getAll();
                pokemonRepository.getAll().forEach(function(pokemon) {
                        console.log(pokemon);
                        console.log(pokemon.name);
                        });




const array1 = pokemonRepository.getAll();


array1.forEach(function(element) {
    console.log(element);
    //here you can do whatever you want
    });


  const repository = [{
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

const repository = pokemonRepository.getAll();
    pokemonRepository.getAll().forEach(function(pokemon) {
            console.log(pokemon);
            console.log(pokemon.name);
            console.log(index);
            console.log(array);
            });


const name = pokemonRepository.getAll();
pokemonRepository.getAll().forEach(function(pokemon) {
      console.log(pokemon);
        });

        repository.forEach(function(repository) {
         document.write(repository.name + '<br>');
         });


const repository = pokemonRepository.getAll();
repository.forEach(function(pokemon) {
    console.log(pokemon);
        });
