  "use strict";

  $(document).ready(function () {

    var i;
    for (i = 1; i < 6; i++) {
      $("div").append("Achteraan toegevoegd: " + i + "<br>");
      $("div").prepend("Vooraan toegevoegd: " + i + "<br>");
    }
  });