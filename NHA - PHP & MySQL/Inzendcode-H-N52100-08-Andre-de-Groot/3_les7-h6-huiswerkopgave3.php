<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 7 - Hoofdstuk 6 - Opgave 3 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }

</style>

<body>

<?php 

function deelGetallen($getal, $deelgetal) {
return $getal." gedeeld door ".$deelgetal." is ".$getal/$deelgetal."<br><br>"; 
}

echo deelGetallen(12, 3);

// Bepaal 7 willekeurige lottogetallen

function bepaalLottogetallen() {

  $nummers = array();
  $lottoNummer = rand(1, 35);
  array_push($nummers, $lottoNummer);
  $uniekeNummers = array_unique($nummers);
  $aantal = count($uniekeNummers);

  // Als het aantal getallen in de array minder dan 7 bedraagt, genereer dan nog een uniek willekeurig nummer
  while ($aantal<7) {
    $lottoNummer = rand(1, 35);
    array_push($nummers, $lottoNummer);
    $uniekeNummers = array_unique($nummers);
    $aantal = count($uniekeNummers);
  }

  echo "De 7 lottogetallen zijn: ";
  foreach($uniekeNummers as $nummer){ 
    echo $nummer."\n";
  } 

}

bepaalLottogetallen();

?>



</body>

</html>