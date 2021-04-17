"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)
var getal1 = prompt("Voer het eerste getal in");
var getal2 = prompt("Voer het tweede getal in");
var cijfer1 = parseInt(getal1);
var cijfer2 = parseInt(getal2);
var grootsteGetal;

if (cijfer1 > cijfer2) {
  grootsteGetal = cijfer1;
} else {
  grootsteGetal = cijfer2;
}

document.getElementById("uitkomst").innerHTML =
  "Waarde getal 1: " + cijfer1 + "." + "<br>" + "Waarde getal 2: " + cijfer2 + "." + "<br>" + "Het grootste getal is: " + grootsteGetal;