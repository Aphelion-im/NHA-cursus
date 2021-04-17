"use strict";

$(document).ready(function () {

  /* Functie met de callback funtie:*/
  $("#knopAnimatieStarten").click(function () {

    $("#dummyParagraaf").fadeOut(3000, function () {
      alert("Animatie compleet!");
    });
  });

  $("#knopAnimatieHalt").click(function () {
    $("#dummyParagraaf").stop();
  });

  $("#knopAnimatieStop").click(function () {
    $("#dummyParagraaf").stop(true, true);
  });

  $("#knopAnimatieReset").click(function () {
    $("#dummyParagraaf").fadeIn(1);
  });


 


});