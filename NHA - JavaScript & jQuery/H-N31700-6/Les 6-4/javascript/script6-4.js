"use strict";

window.onload = function () {

  document.getElementById("invoerTekst").addEventListener("keyup", function (e) {

    if (e.keyCode === 13) {
      var bericht = document.getElementById("invoerTekst");

      setTimeout(laatBerichtZien, 1000);

      function laatBerichtZien() {
        alert(bericht.value);
      }
    }
  });

}