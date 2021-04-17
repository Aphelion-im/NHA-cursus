"use strict";

$(document).ready(function () {

  $(document).on("keydown", function (e) {

    switch (e.which) {
      //Links
      case 37:
        $("#blokje").animate({
          left: '-=20'
        });
        $("#blokje").finish();
        break;
        //Naar boven
      case 38:
        $("#blokje").animate({
          top: '-=20'
        });
        $("#blokje").finish();
        break;
        //Rechts
      case 39:
        $("#blokje").animate({
          left: '+=20'
        });
        $("#blokje").finish();
        break;
        //Naar beneden
      case 40:
        $("#blokje").animate({
          top: '+=20'
        });
        $("#blokje").finish();
        break;
      default:
        console.log("Nothing happened.");
    }
  });













});