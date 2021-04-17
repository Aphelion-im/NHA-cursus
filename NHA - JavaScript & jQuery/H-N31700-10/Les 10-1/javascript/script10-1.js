  "use strict";

  $(document).ready(function () {

    $(".imgstokstaartjes").hover(
      function () {
        $("div").css("display","block");
      },
      function () {
        $("#tooltip").css("display","none");
      }
    );

  });