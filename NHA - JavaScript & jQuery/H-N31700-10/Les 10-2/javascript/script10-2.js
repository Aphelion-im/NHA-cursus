  "use strict";

  $(document).ready(function () {

    $("#box").hover(
      function (e) {

        $("#box").on('mousemove', function (e) {

          //kleine aanpassing aan het script uit het boek. 
          //Laat nu alleen de coordinaten zien van de box zelf en niet van de pagina.

          var offset = $("#box").offset();
          var relativeX = parseInt((e.pageX - offset.left));
          var relativeY = parseInt((e.pageY - offset.top));

          $("#output").html("Muispositie X: " + relativeX + "." + "<br>" + "Muispositie Y: " + relativeY + ".");

        });


      },
      function () {

        $("#output").html("Muispositie X: " + 0 + "." + "<br>" + "Muispositie Y: " + 0 + ".");

      }
    );

  });