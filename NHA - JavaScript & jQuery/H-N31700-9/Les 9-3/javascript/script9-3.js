  "use strict";

  $(document).ready(function () {

    $("#knopInvoer").click(function () {

      //Ik heb er voor gekozen de extra tekst binnen <p></p> te plaatsen, maar 
      //nog wel in de genoemde <div>. Staat wat netter.
      //Ook even een experiment met textarea in plaats van een input type text.

      var waarde = $("#tekstInvoer").val();
      $("div").append("<br> " + "<p>" + waarde + ".</p>");
    });
  });