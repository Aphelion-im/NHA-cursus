  "use strict";

  $(document).ready(function () {

    //Stijl object voor paragrafen
    $("p").css({
      "border": "1px solid #008CA7",
      "color": "#184D8F;",
      "padding": "10px"
    });

    //Stijlknop 1
    $("#stijlKnop1").click(function () {
      console.log("knop 1");
      $("p").removeAttr("style").removeAttr("class").addClass("paragraafNieuw");

    });

    //Stijlknop 2
    $("#stijlKnop2").click(function () {
      console.log("knop 2");
      $("p").removeAttr("style").removeAttr("class").addClass("paragraafNieuw2");
    });


    //Stijlknop 3
    $("#stijlKnop3").click(function () {
      console.log("knop 3");
      $("p").removeAttr("style").removeAttr("class").addClass("paragraafNieuw3");
    });


  });