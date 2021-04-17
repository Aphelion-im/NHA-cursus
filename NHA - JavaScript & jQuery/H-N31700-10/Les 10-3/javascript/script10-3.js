  "use strict";

  $(document).ready(function () {

    $(".imgstokstaartjes").hover(
      function () {

        //Tooltip gaat stotteren. Als ik "img" op window ($("img") -> $(window)) zet, gaat het beter, maar
        //dan is de tooltip ten alle tijden zichtbaar.
        $("img").on('mousemove', function (e) {

          $("#tooltip").css({
            "display": "block",
            "position": "absolute",
            "left": e.pageX,
            "top": e.pageY
          });

        });

      },
      function () {
        $("#tooltip").css("display", "none");
      }
    );

  });