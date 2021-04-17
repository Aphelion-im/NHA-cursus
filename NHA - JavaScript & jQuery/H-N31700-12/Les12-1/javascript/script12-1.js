"use strict";

$(document).ready(function () {


  $("button").on("click", function () {
    $("#inhoud").load("content12.html", function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success") {
        alert("Het bestand is succesvol ingeladen!");
        $("button").hide();
      }
      if (statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });















});