"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)
var naam = prompt("Wat is jouw naam?");
var geboortejaar = prompt("Wat is jouw geboortejaar?");
var leeftijd = 2019 - geboortejaar;
var lengteZin = "Hallo " + naam + ". " + "Jij bent geboren in " + geboortejaar + "." + "<br>" + "Leeftijd: " + leeftijd + ".";


document.getElementById("welkom").innerHTML = lengteZin;
console.log("Aantal tekens: " + lengteZin.length); //CTRL + Shift + J.
console.log("'N' op positie: " + lengteZin.indexOf("n"));
console.log("Geboortejaar gelijk aan 1980?: " + (geboortejaar == 1980));