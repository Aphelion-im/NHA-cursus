  "use strict";

  $(document).ready(function () {

    $("#box").hover(
      function (e) {

        $("#box").on('mousemove', function (e) {

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