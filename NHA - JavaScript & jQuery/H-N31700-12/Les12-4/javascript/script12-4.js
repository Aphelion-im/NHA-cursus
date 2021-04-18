"use strict";

$(document).ready(function () {

  const apiKey = ""; // Insert your Openexchangerates.org API key here
  const currencyUsUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;


  $("button").on("click", function () {

    let invoer = $('#valutaInvoer').val();

    if (isNaN(invoer)) {
      $('#divResult').html('Voer een nummer in.');
      $('#valutaInvoer').val('').focus();
    } else {

      $.ajax({

        url: currencyUsUrl,
        type: 'GET',
        dataType: 'jsonp',
        contentType: 'application/json',
        success: function (data) {

          let conversie = 'Bedrag in Euro\'s (&#128;): ' + ((invoer * (data.rates.EUR)).toFixed(2)) + '.<br>';
          conversie += 'Bedrag in Britse Ponden (&#8356;): ' + ((invoer * (data.rates.GBP)).toFixed(2)) + '.<br>';
          conversie += 'Bedrag in Japanse Yen (&#165;): ' + ((invoer * (data.rates.JPY)).toFixed(2)) + '.<br>';
          $('#divResult').empty().append(conversie);
          $('#valutaInvoer').val('').focus();
        }
      });
    }
  });
});