"use strict";

window.onload = function () {

  var nettoBedrag = prompt("Geef het netto bedrag op.");
  console.log("test");
  document.getElementById("output").innerHTML = "Het netto bedrag is: " + "€" + nettoBedrag + "<br>" + "BTW: 21%" + "<br>" + "Bruto: " + "€" + (nettoBedrag * 1.21);









}