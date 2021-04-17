browserVersie();

function browserVersie() {
    var naam = "Browser Versie: " + navigator.appVersion + ".";
    document.getElementById("browser").innerHTML = naam;
  }