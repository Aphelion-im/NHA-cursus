"use strict";

window.onload = function () {

  var knopInvoeren = document.getElementById("knopInvoeren");
  var knopVerwijderen = document.getElementById("knopVerwijderen");
  var tekstInvoer = document.getElementById("invoerTekst");
  var tekstUitvoer;
  var teller = 1;

  knopInvoeren.addEventListener("click", function () {

    tekstUitvoer = tekstInvoer.value;

    if (teller < 6) {
      kopjeAanmaken();
      teller++;
    } else {
      kopjeAanmaken();
      teller = 1;
    }

    //Reset tekstinvoervak
    document.getElementById("invoerTekst").value = "";
  });

  function kopjeAanmaken() {
    console.log("H" + teller);
    var kopje = document.createElement("h" + teller);
    var tekst = document.createTextNode(tekstUitvoer);
    kopje.appendChild(tekst);
    document.body.appendChild(kopje);
    document.getElementById("div-Result").appendChild(kopje);

  }



  knopVerwijderen.addEventListener("click", function () {

    var list = document.getElementById("div-Result");
    list.removeChild(list.childNodes[0]);
    teller = 1;


  });
}