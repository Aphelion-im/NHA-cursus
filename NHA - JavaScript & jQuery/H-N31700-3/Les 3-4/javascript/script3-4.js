"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)
var getal1 = prompt("Voer het eerste getal in");
var getal2 = prompt("Voer het tweede getal in");
var cijfer1 = parseInt(getal1);
var cijfer2 = parseInt(getal2);
var grootsteGetal;

console.log(typeof getal1);
console.log(typeof getal2);
console.log(typeof optellen);

if (cijfer1 > cijfer2) {
    grootsteGetal = "Het eerste getal is groter, met de waarde: " + cijfer1 + " in vergelijking met het tweede getal: " + cijfer2 + ".";
  } else if (cijfer1 < cijfer2) {
    grootsteGetal = "Het tweede getal is groter, met de waarde: " + cijfer2 + " in vergelijking met het eerste getal: " + cijfer1 + ".";
  } else {
    grootsteGetal = "beide getallen zijn even groot.";
  }

document.getElementById("uitkomst").innerHTML =
    "Waarde getal 1: " + cijfer1 + "." + "<br>" + "Waarde getal 2: " + cijfer2 + "." + "<br>" + grootsteGetal;