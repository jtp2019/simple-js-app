// 1.1 exercises a. alert

alert("Hello World");
console.log ("Hello World");

alert("Hello World");
document.write("Hello World");

//b.favoriteFood value
// console log and document write for one favoriteFood

var favoriteFood ='Rice';
    favoriteFood ='Rice';

var favoriteFood ='Rice';
    document.write(favoriteFood);

var favoriteFood ='Rice';
    console.log(favoriteFood);

// console log and document write for several favoriteFood

var favoriteFood ='Rice, Bread, Nuddle, Mash Potatoes, Musli';
    favoriteFood ='Rice, Bread, Nuddle, Mash Potatoes, Musli';
    document.write(favoriteFood);

var favoriteFood ='Rice, Bread, Nuddle, Mash Potatoes, Musli';
    favoriteFood ='Rice, Bread, Nuddle, Mash Potatoes, Musli';
    console.log(favoriteFood);

    // faviouratefood- Array method

const faviouratefood = ["Rice", "Bread", "Nuddle", "Mash Potatoes", "Musli"];
      console.log(faviouratefood);

const faviouratefood = ["Rice", "Bread", "Nuddle", "Mash Potatoes", "Musli"];
      document.write(faviouratefood);

  // console table for Array and single variable

const faviouratefood = ["Rice", "Bread", "Nuddle", "Mash Potatoes", "Musli"];
      console.table(["Rice", "Bread", "Nuddle", "Mash Potatoes", "Musli"]);

var favoriteFood ='Rice, Bread, Nuddle, Mash otatoes, Musli';
    console.table(['Rice, Bread, Nuddle, Mash otatoes, Musli']);

// previous list model for variable
var list = document.getElementById("favoritefood");
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("favoriteFood");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
