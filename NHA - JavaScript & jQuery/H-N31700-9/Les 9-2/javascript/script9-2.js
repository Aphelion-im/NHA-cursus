  "use strict";

  $(document).ready(function () {


    $("#knopInvoer").click(function () {

      var waarde = $("#cijferInvoer").val();

      if ($('#achtergrondKleur').is(':checked')) {
        var kleurContext = "background-color";

      } else {
        var kleurContext = "color";
      }
      
      if (waarde.length > 6) {
        alert("U heeft teveel cijfers ingevoerd!");
        $("#cijferInvoer").val("");
      } else if (waarde.length < 6) {
        alert("Voer 6 cijfers in!");
        $("#cijferInvoer").val("");
      } else {
        $("div").css(kleurContext, "#" + waarde);
        $("#cijferInvoer").val("");
      }
    });
  });