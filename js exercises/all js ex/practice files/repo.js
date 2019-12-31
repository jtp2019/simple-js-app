//exercise 1.4-------------//

var repository = [
    {
    name: "Bulbasaur",
    height: 0.7,
    types: "grass snd poison"
    },
    {
    name: "Jigglypuff",
    height: 0.1,
    types: "normal and fairy"
    },
    {
    name: "Lapras",
    height: 0.8,
    types: "water and ice"
    },
   ];

var typesRepository = repository.filter(repository => repository.types === 'normal and fairy');
console.log(typesRepository);

var heightRepository = repository.filter(repository => (repository.height >= 0.1 && repository.height < 0,8));
console.log(hightRepository);


repository.forEach(function(repository){
  console.log(repository);
});

Object.keys(repository).forEach(function(property) {
  console.log(repository[property]);
});


//difference with For loop---
//for (var i = 0; i < repository.length; i++){
//console.log(repository);
}
