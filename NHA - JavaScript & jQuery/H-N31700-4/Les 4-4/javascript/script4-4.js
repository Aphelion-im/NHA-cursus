"use strict";

//Notitie: https://stackoverflow.com/questions/30203752/how-do-i-duplicate-a-line-or-selection-within-visual-studio-code (Shift + Alt + Down/up)

var willekeurigGetal;

function genereerGetal() {
  willekeurigGetal = Math.round(Math.random() * 100) + 1;
  document.getElementById("uitkomst").innerHTML = willekeurigGetal;
}

