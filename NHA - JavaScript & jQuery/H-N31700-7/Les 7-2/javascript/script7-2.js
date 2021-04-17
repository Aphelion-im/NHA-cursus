"use strict";

window.onload = function () {

  var knopInvoeren = document.getElementById("knopInvoeren");
  var knopVerwijderen = document.getElementById("knopVerwijderen");
  var tekstInvoer = document.getElementById("invoerTekst");
  var tekstUitvoer;

  knopInvoeren.addEventListener("click", function () {

    tekstUitvoer = tekstInvoer.value;

    var paragraaf = document.createElement("p");
    var tekst = document.createTextNode(tekstUitvoer);
    paragraaf.appendChild(tekst);
    document.body.appendChild(paragraaf);
    document.getElementById("div-Result").appendChild(paragraaf);

    //Reset tekstinvoervak
    document.getElementById("invoerTekst").value = "";
  });


  knopVerwijderen.addEventListener("click", function () {

    var list = document.getElementById("div-Result");
    list.removeChild(list.childNodes[0]);

  });
}