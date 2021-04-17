"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)

var a = prompt("Voer het eerste getal in");
var b = prompt("Voer het tweede getal in");
var som;

getallenOptellen(a,b);

function getallenOptellen(a, b) {
  som = parseInt(a) + parseInt(b);
}

document.getElementById("uitkomst").innerHTML = som;
