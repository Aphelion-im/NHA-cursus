"use strict";



// Voer script uit zodra de pagina helemaal geladen is.
window.onload = function () {

  var naam;
  var knop;

  document.getElementById("knop").addEventListener("click", verkrijgWaarde);

  function verkrijgWaarde() {
    naam = document.getElementById("naamInvoer").value;

    if (naam.length < 2) {
      alert("Voer meer dan 2 letters in AUB.");
      document.getElementById("naamInvoer").value = "";
    } else {
      document.getElementById("uitvoer").innerHTML = " Van harte welkom " + naam + "!";
    }
  }

}