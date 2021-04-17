<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 8 - Hoofdstuk 7 - Opgave 2 | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }

  main {
    border: 1px solid black;
    margin: 0 auto;
    padding: 0 24px 24px 24px;
    width: 50%;
  }

  form {
    width: 20%;
    display: flex;
    flex-direction: column;
  }

  form input[type="submit"] {
    margin: 16px 0 24px 0;
  }
</style>

<body>
  <main>
    <h2>Registratie</h2>
    <form name="form" action="" method="POST">
      <input type="text" name="voornaam" placeholder="voornaam" autofocus>
      <input type="text" name="naam" placeholder="naam">
      <input type="text" name="straat" placeholder="straat">
      <input type="text" name="postcode" placeholder="postcode">
      <input type="text" name="plaats" placeholder="plaats">
      <input type="email" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
      <input type="submit" name="verzenden" value="Verzenden">

    </form>

    <?php


if (isset($_POST['verzenden'])) {
  // Variabelen & Sanitizer filters
  $voornaam = ucfirst(filter_input(INPUT_POST,'voornaam', FILTER_SANITIZE_STRING));
  $naam = ucfirst(filter_input(INPUT_POST,'naam', FILTER_SANITIZE_STRING));
  $straat = ucfirst(filter_input(INPUT_POST,'straat', FILTER_SANITIZE_STRING));
  $postcode = strtoupper($_POST['postcode']);
  $plaats = strtoupper(filter_input(INPUT_POST,'plaats', FILTER_SANITIZE_STRING));
  $email = filter_input(INPUT_POST,'email', FILTER_SANITIZE_EMAIL);
  $password = filter_input(INPUT_POST,'password', FILTER_SANITIZE_STRING);

  // Output na klikken op de Verzenden knop
  echo "<p><strong>Bevestiging</strong></p>";
  echo "Voornaam: ".$voornaam."<br>";
  echo "Naam: ".$naam."<br>";
  echo "Straat: ".$straat."<br>";
  echo "Postcode: ".$postcode."<br>";
  echo "Plaats: ".$plaats."<br>";
  echo "Email: ".$email."<br>";
} else {
  $voornaam = "";
  $naam = "";
  $straat = "";
  $postcode = "";
  $plaats = "";
  $email = "";
  $password = "";
}

?>
</main>

</body>

</html>