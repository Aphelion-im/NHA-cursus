"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)

function alarmTekst(naam) {
  alert("Hallo " + naam + "." + " Welkom!" + " Lekker aan het programmeren?");
}

var naam = prompt("Wat is jouw naam?");

alarmTekst(naam);
