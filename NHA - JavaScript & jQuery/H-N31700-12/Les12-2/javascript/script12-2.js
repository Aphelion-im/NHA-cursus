"use strict";

$(document).ready(function () {

  $("button").on("click", function () {

    $.ajax({
      url: "content12.html",
      success: function (result) {
        $("#inhoud").html(result);
        $("button").hide();
      },
      error: function (responseTxt, statusTxt, xhr) {

        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
    });
  });
});