<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 5 - Hoofdstuk 4 - Opgave 1 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }
</style>

<body>


  <?php 

// Bepaal de tijdzone.
date_default_timezone_set("Europe/Amsterdam");

// Variabelen
$tijd = date("H:i");  
$weekNummer = date("W");
$maand = date("F");

// Output
echo "<p>Het is nu: $tijd.<p>"; // Een <p> gedaan ipv een <br>, deze <p> heeft al standaard browser styling, in dit geval, en dus een margin-bottom.

if ($tijd < 12) {
  echo "<p>Het is nu ochtend.</p>";
} else {
  echo "<p?>Het is nu middag of avond.</p>";
}

echo "<p>Deze week is week $weekNummer.</p>";
echo "Deze maand is $maand.";

?>




</body>

</html>