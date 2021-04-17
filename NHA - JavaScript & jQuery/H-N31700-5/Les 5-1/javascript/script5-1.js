"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)

var geboortejaar;
vraagGeboortejaar();

function vraagGeboortejaar() {
  geboortejaar = prompt("Wat is jouw geboortejaar?");
  if (geboortejaar < 1980) {
    document.getElementById("uitkomst").innerHTML = "Klik op CTRL + Shift + J om het console bericht te bekijken.";
    console.log("Gebruiker is geboren vóór 1980.");
  } else {
    document.getElementById("uitkomst").innerHTML = "Gebruiker is geboren tijdens of na 1980.";

  }


}