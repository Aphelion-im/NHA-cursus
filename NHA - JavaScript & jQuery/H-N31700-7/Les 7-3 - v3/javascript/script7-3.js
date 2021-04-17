  "use strict";

  /*************************************************
  Beste Milly, 

  Deze opdracht, versie 3, met een Switch statement
  Wellicht wil je nog een variant zien met: var h1 = document.createElement('h1');
  Misschien is onderstaande oplossing ook goed.

  */

  window.onload = function () {

    var tellenKliks = 0;
    var knopInvoeren = document.getElementById("knopInvoeren");
    var tekstInvoer = document.getElementById("invoerTekst");
    var tekstUitvoer;

    document.getElementById("knopInvoeren").onclick = function () {
      tellenKliks++;

      switch (tellenKliks) {
        case 1:
          {
            kopjeAanmaken(tellenKliks);
            break;
          }
        case 2:
          {
            kopjeAanmaken(tellenKliks);
            break;
          }
        case 3:
          {
            kopjeAanmaken(tellenKliks);
            break;
          }
        case 4:
          {
            kopjeAanmaken(tellenKliks);
            break;
          }
        case 5:
          {
            kopjeAanmaken(tellenKliks);
            break;
          }
        case 6:
          {
            kopjeAanmaken(tellenKliks);
            tellenKliks = 0;
            break;
          }
      }
    };

    function kopjeAanmaken() {
      tekstUitvoer = tekstInvoer.value;
      var kopje = document.createElement("h" + tellenKliks);
      var tekst = document.createTextNode(tekstUitvoer);
      kopje.appendChild(tekst);
      document.body.appendChild(kopje);
      document.getElementById("div-Result").appendChild(kopje);
    }

  }