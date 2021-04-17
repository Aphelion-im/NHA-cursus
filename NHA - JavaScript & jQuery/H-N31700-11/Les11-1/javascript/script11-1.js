  "use strict";

  $(document).ready(function () {

    $('#wegtoverenTekst').change(
      function(){
          if ($(this).is(':checked')) {
            $('#dummyTekst').slideUp(500);
          } else {
            $('#dummyTekst').slideDown(500);
          }
      });

  });