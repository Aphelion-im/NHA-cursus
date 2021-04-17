"use strict";

$(document).ready(function () {

  $("button").on("click", function () {

    $("form").validate({

      rules: {
        naam: {
          required: true,
          minlength: 2,
          maxlength: 10
        },

        email: {
          required: true,
          email: true
        }
      }

    });

  });

});