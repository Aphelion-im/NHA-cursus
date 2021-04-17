"use strict";

window.onload = function () {

  var knop = document.getElementById("knop");
  var tekstInvoer = document.getElementById("invoerTekst");
  var tekstUitvoer;

  knop.addEventListener("click", function () {

    tekstUitvoer = tekstInvoer.value;

    var paragraaf = document.createElement("p");
    var tekst = document.createTextNode(tekstUitvoer);
    paragraaf.appendChild(tekst);
    document.body.appendChild(paragraaf);
    document.getElementById("div-Result").appendChild(paragraaf);

    //Reset tekstinvoervak
    document.getElementById("invoerTekst").value = "";
  });
}