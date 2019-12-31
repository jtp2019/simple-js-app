//1.2 exercises---------1.2 exercises
// variable name repository, with three keys and objects
var repository = []
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
console.log(repository)

// an array of objects in a tabular formate

function pokemon(name, height, types) {
  this.name = name;
  this.height = height;
  this.types = types;
}

var Bulbasaur = new pokemon('Bulbasaur','0.7','grass and poison');
var Jigglypuff = new pokemon('Jigglypuff','0.1','normal and fairy');
var Lapras= new pokemon('Bulbasaur','0.7','water and ice');

console.table([Bulbasaur, Jigglypuff, Lapras]);
