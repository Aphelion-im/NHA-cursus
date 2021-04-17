  "use strict";

  $(document).ready(function () {

    $("div").click(function () {
      var achtergrondKleur = $(this).css("background-color");
      $(".achtergrondKleur").html("Achtergrondkleur is: " + achtergrondKleur + ".");

      var tekstKleur = $(this).css("color");
      $(".tekstKleur").html("Tekstkleur is: " + tekstKleur + ".");
    });
  });