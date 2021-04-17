  "use strict";

  $(document).ready(function () {

    $("input[type='text']").on("click", function () {
      $(this).select();
    });

    $("#klembordKnop").on("click", function () {
      var clipboardValue = $("#tekstKopie").val();
      console.log(clipboardValue);
    });

    $("#tekstKopie").keyup(function (e) {
      if (e.keyCode == 13) {
        alert("U hebt op Enter gedrukt, we gaan het formulier verzenden.");
      }
    });

  });