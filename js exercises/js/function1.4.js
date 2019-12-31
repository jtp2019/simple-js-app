
//exercise 1.4-------------//

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

 repository.forEach(function(repository){
   console.log(repository);
 });

Object.keys(repository).forEach(function(property) {
console.log(property); // key
console.log(repository[property]); // value
});

//difference with For loop---

  for (var i = 0; i < repository.length; i++) {
    console.log(repository[i], '' );
  }
