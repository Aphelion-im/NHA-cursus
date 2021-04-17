"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)
var getal1 = prompt("Voer het eerste getal in");
var getal2 = prompt("Voer het tweede getal in");

var optellen = parseFloat(getal1) + parseFloat(getal2);

console.log(typeof getal1);
console.log(typeof getal2);
console.log(typeof optellen);

document.getElementById("uitkomst").innerHTML = optellen;