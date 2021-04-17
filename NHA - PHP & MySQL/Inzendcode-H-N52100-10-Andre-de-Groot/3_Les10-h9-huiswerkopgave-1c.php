<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 10 - Hoofdstuk 9 - Opgave 1c | NHA.nl</title>
  <!-- Stylesheets -->
  <link href="https://pagecdn.io/lib/normalize/8.0.1/normalize.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
</head>

<style>
  body {
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;
  }

  main {
    margin: 0 auto;
    width: 70%;
  }

  form {
    background-color: #e2eef3;
    border-bottom: 2px solid #004d91;
    border-radius: 24px 24px 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 16px 32px 32px;
  }

  .resultaten {
    background-color: #e2eef3;
    border-radius: 0 0 24px 24px;
    padding: 8px 16px 32px 32px;
    margin-bottom: 48px;
  }

  .row {
    width: 100%;
    margin-bottom: 8px;
    display: flex;
  }

  form input {
    width: 50%;
  }

  form input:focus {
    outline: 2px solid #004d91;
  }

  form input[type="submit"] {
    background-color: #55b5df;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 16px auto 0 auto;
    text-transform: uppercase;
    width: 25%;
  }

  form input[type="submit"]:hover {
    background-color: #55b5dfc7;
  }

  form label {
    width: 20%;
    margin-right: 5rem;
  }

  h1,
  h2 {
    color: #004d91;
  }

  hr {
    background-color: #004d91;
    border: 1px solid #004d91;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

 td, 
 th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: #ddd;}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #004d91;
  color: white;
}
</style>

<body>
  <main>
<h1>Bibliotheek</h1>
    <form name="form" action="" method="POST">
      <h2>Voeg een titel toe</h2>

      <div class="row">
        <label for="titel">Titel</label>
        <input type="text" name="titel" autofocus>
      </div>

      <div class="row">
        <label for="auteur">Auteur</label>
        <input type="text" name="auteur">
      </div>

      <div class="row">
        <label for="isbn">ISBN</label>
        <input type="text" name="isbn">
      </div>

      <div class="row">
        <label for="voorraad">Voorraad</label>
        <input type="number" name="voorraad">
      </div>


      <div class="row">
        <label for="inkoopprijs">Inkoopprijs</label>
        <input type="number" name="inkoopprijs" step="0.01" min="0" max="999">
      </div>

      <div class="row">
        <input type="submit" name="opslaan" value="Opslaan">
      </div>
    </form>

    <section class="resultaten">
      <h2>Resultaten</h2>

<table>
<tr>
<th style="width: 5%">Id#</th>
<th style="width: 30%">Titel</th>
<th style="width: 15%">Auteur</th>
<th style="width: 25%">ISBN</th>
<th style="width: 10%">Voorraad</th>
<th style="width: 15%">Inkoopprijs</th>
</tr>


<?php

// Variabelen Veldnamen
$titel = ucfirst(filter_input(INPUT_POST, "titel", FILTER_SANITIZE_STRING));
$auteur = ucfirst(filter_input(INPUT_POST, "auteur", FILTER_SANITIZE_STRING));
$isbn = filter_input(INPUT_POST, "isbn", FILTER_SANITIZE_NUMBER_INT); 
$voorraad = filter_input(INPUT_POST, "voorraad", FILTER_SANITIZE_NUMBER_INT);
$inkoopprijs = filter_input(INPUT_POST, "inkoopprijs", FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

try {
$db = new PDO("mysql:host=localhost;dbname=bibliotheek", "root", "root");

if (isset($_POST['opslaan'])) {

// Voeg nieuwe record toe
$queryInsert = $db->prepare("INSERT INTO boeken(titel, auteur, isbn, voorraad, inkoopprijs) VALUES(:titel, :auteur, :isbn, :voorraad, :inkoopprijs)");
$queryInsert->bindParam("titel", $titel);
$queryInsert->bindParam("auteur", $auteur);
$queryInsert->bindParam("isbn", $isbn);
$queryInsert->bindParam("voorraad", $voorraad);
$queryInsert->bindParam("inkoopprijs", $inkoopprijs);
$queryInsert->execute();

// Alle records weergeven:
$queryShow = $db->prepare("SELECT * FROM boeken");
$queryShow->execute();
$result=$queryShow->fetchAll(PDO::FETCH_ASSOC);
foreach($result as $data) {

echo "<tr>";
echo "<td>".$data["id"]."</td>";
echo "<td>".$data["titel"]."</td>";
echo "<td>".$data["auteur"]."</td>";
echo "<td>".$data["isbn"]."</td>";
echo "<td>".$data["voorraad"]."</td>";
echo "<td>"."&euro;".$data["Inkoopprijs"]."</td>";
echo "</tr>";
}
} else {
  $titel = "";
  $auteur = "";
  $isbn = "";
  $voorraad = "";
  $inkoopprijs = "";
}
} catch (PDOException $e) {
die ("Error!: ".$e-->getMessage());
}


echo "</table>";




?>
  </section>
</main>

</body>

</html>