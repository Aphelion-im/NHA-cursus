  "use strict";

  $(document).ready(function () {


    $("#aantalListItems").keyup(function (e) {
      if (e.keyCode == 13) {

        var aantal = parseInt($("#aantalListItems").val());

        if (isNaN(aantal)) {

          alert("Voer een nummer in");

        } else {

          for (var i = 0; i < aantal; i++) {
            $("#lijst").append("<li>List item</li>");

          }
          $("#aantalListItems").val("")

          $("li").hover(
            function () {
              var index = $(this).index();

              //Jammer van de stotterende tooltip!
              $("#lijst").on('mousemove', function (e) {

                $("#tooltip").css({
                  "display": "block",
                  "position": "absolute",
                  "left": e.pageX,
                  "top": e.pageY
                });
              });
              $("#tooltip").html("Dit is list item nummer: " + index + ".");
            },
            function () {
              $("#tooltip").css("display", "none");
            }
          );
        }
      }
    });
  });