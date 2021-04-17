  "use strict";

  $(document).ready(function () {

    $("#knopInvoer").click(function () {

      var hoogte = $("#hoogteWaarde").val();
      var breedte = $("#breedteWaarde").val();
      var hoogteWaarde = parseInt(hoogte);
      var breedteWaarde = parseInt(breedte);

      if (isNaN(hoogte) || isNaN(breedte)) {

        $("#status").html("Status: Voer een getal in!");
        $("#hoogteWaarde").val("");
        $("#breedteWaarde").val("");

      } else {
        $("#status").html("Status: Ok");
        $("div").css({
          "width": hoogteWaarde,
          "height": breedteWaarde,
          "margin-bottom": "25px"
        });
        $("#hoogteWaarde").val("");
        $("#breedteWaarde").val("");
      }

    });
  });