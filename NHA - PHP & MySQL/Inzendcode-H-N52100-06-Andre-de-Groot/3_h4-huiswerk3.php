<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 5 - Hoofdstuk 4 - Opgave 3 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }
</style>

<body>


  <?php 

$tekstkleur = array("blue", "green", "red", "orange", "lightblue", "violet");
$waarde = 100;

// Array iteratie
foreach ($tekstkleur as $kleur) {
  echo "<div style='color: $kleur;'>Hello World in $waarde</div><br><br>";
  
}

// Waarden weergeven
echo "Waarde: ";
while ($waarde <=1000) {

  echo "$waarde ";
  $waarde +=100;
}

?>




</body>

</html>