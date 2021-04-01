"use strict";

var kleur;
var dier;
var eten;

function zetKleur(waarde) {
    kleur = waarde;
}

function zetDier(waarde) {
    dier = waarde;
}

function zetEten(waarde) {
    eten = waarde;
}



function laatAlertZien() {

    alert("Uw " + kleur + " " + dier + " eet graag " + eten);


document.getElementById("output").innerHTML="Uw " + kleur + " " + dier + " eet graag " + eten + ".";


}