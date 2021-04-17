<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 7 - Hoofdstuk 6 - Opgave 1 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }

  main {
    border: 1px solid black;
    height: auto;
    padding: 8px;
    width: auto;
  }

  .rood {
    color: red;
    font-weight: 700;
  }
</style>

<body>

  <main>
    <?php 

// Sessie initiatie
session_start();

// Sessie variabele 'counter':
if(!isset($_SESSION['counter'])) {
$_SESSION['counter']=1; 
} else {
$_SESSION['counter']+=1;
}

// Cookie 'allcounter':
setcookie('allcounter', @$_COOKIE['allcounter']+1, time() + 3600);
if(!isset($_COOKIE['allcounter'])) {
  $_COOKIE['allcounter']=1; 
} else {
  $_COOKIE['allcounter']+=1; 
}

// Cookie 'OS':
setcookie('OS', $_SERVER['HTTP_USER_AGENT'], time() + 3600);

/* Opmerking aan docent:
Er staat in de opdracht dat het programma de OS via een cookie zal vastleggen. Dat doet het.
Er staat niet dat het via een cookie moet worden weergegeven. 

Als ik $_COOKIE['OS'] gebruik in onderstaande echo, ipv $_SERVER['HTTP_USER_AGENT'], dan moet ik, als ik alle cookies heb verwijderd, 2x de 
browser verversen om een correcte weergave te krijgen van de OS.
*/

// Weergave:
echo "<p>Deze pagina heeft u al <span class='rood'>" . $_SESSION['counter'] . "</span> keer bekeken voordat de internetbrowser is afgesloten.</p>";
echo "<p>In totaal heeft u deze pagina al <span class='rood'>" . @$_COOKIE['allcounter'] . "</span> keer bekeken.</p>";
echo "<p>Het besturingssysteem waarmee u werkt, is: <span class='rood'>" . $_SERVER['HTTP_USER_AGENT'] . "</span></p>";

?>
  </main>

</body>

</html>