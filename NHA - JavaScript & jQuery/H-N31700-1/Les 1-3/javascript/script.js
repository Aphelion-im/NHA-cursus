browserNaam();

function browserNaam() {
    var naam = "Browser Naam: " + navigator.appName + ".";
    document.getElementById("browser").innerHTML = naam;
  }