<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 8 - Hoofdstuk 7 - Opgave 1 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }

  main {
    border: 1px solid black;
    margin: 0 auto;
    padding: 24px;
    width: 50%;
  }

  form {
    margin-bottom: 24px;
  }
</style>

<body>

  <main>
    <form name="form" action="" method="post">
      Aantal schoenen: <input type="number" name="aantal" id="aantal" min="0" max="10" placeholder="Aantal">
      <button>Te betalen</button>
    </form>

    <?php 

// Variabelen
$schoenPrijs = 100;

if (isset($_POST['aantal']))
{
  $aantal = $_POST['aantal'];

  if (($aantal >=2 && $aantal <=5)) {
    echo "Te betalen voor ".$aantal." paar schoenen: €".number_format(($schoenPrijs*$aantal)-($schoenPrijs*$aantal*0.15), 2)." met 15% korting."; // 15% korting.
  } else if ($aantal > 5) {
    echo "Te betalen voor ".$aantal." paar schoenen: €".number_format(($schoenPrijs*$aantal)-($schoenPrijs*$aantal*0.25), 2)." met 25% korting."; // 25% korting.
  } else {
    echo "Te betalen voor ".$aantal." paar schoenen: €".number_format(($schoenPrijs*$aantal), 2)." met 0% korting."; // 0% korting.
  }
}
?>

  </main>

</body>

</html>