<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 7 - Hoofdstuk 6 - Opgave 2 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }

article {
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 8px;
  width: 75%;
}

</style>

<body>


<main>
<article>
<?php 
echo "<h2>Opdracht 2 - Deel 1";
// Variabelen
$voertuigen = array('auto', 'motor', 'vliegtuig', 'trein');
$aantal = count($voertuigen);


// Geef ongesorteerde Array weer:
echo "<h4>Ongesorteerde array:</h4>";
print_r($voertuigen);

// Bewust laten staan ter referentie:
// echo "Array ( ";
// for ($i=0; $i<$aantal; $i++) {
// echo "[".$i."] => ".$voertuigen[$i]." ";
// }
// echo " )";

// Geef gesorteerde Array weer:
echo "<h4>Gesorteerde array:</h4>";
sort($voertuigen);
print_r($voertuigen);

// Bewust laten staan ter referentie:
// echo "Array ( ";
// for ($i=0; $i<$aantal; $i++) {
// echo "[".$i."] => ".$voertuigen[$i]." ";
// }
// echo " )";

?>
</article>

<article>
<?php
echo "<h2>Opdracht 2 - Deel 2</h2>";

// Variabelen deel 2. Normaliter zou ik deze allemaal bovenaan doen (JavaScript)
$getal1 = 7.48736; 
$getal2 = 4.75905;

// Afronden getal 1
echo $getal1 . " naar beneden afgerond wordt: " . round($getal1);
echo "<br>";
echo $getal2 . " op 2 decimalen afgerond wordt: " . number_format($getal2, 2);
echo "<br>";
echo "De wortel van 144 is: " . sqrt(144);
?>
</article>


</main>

</body>

</html>