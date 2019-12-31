//exercise 1.3---//

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
const maxHeight = 0.8;
 for (var i = 0; i < repository.length; i++) {
   console.log(repository[i], '' );
   var message = "";
   if (repository[i].height >= maxHeight) {
      message = " - Wow, that’s big!";
   }

   document.write("<h4>" + repository[i].name + "(height:" + repository[i].height + ")"+ message + "</h4>");
 }
