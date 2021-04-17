<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Les 10 - Hoofdstuk 9 - Opgave 1b | NHA.nl</title>
</head>

<style>
  body {
    font-size: 1.5rem;
  }

  main {
    margin: 0 auto;
    padding: 0 24px 24px 24px;
    width: 50%;
  }


</style>

<body>
  <main>
    

    <?php

try {
$db = new PDO("mysql:host=localhost;dbname=bibliotheek", "root", "root");
$query = $db->prepare("SELECT * FROM boeken");
$query->execute();
$result=$query->fetchAll(PDO::FETCH_ASSOC);
foreach($result as $data) {
echo $data["titel"]." &#8226; ";
echo $data["auteur"]." &#8226; ";
echo $data["isbn"]." &#8226; ";
echo $data["voorraad"]." &#8226; ";
echo "&euro; ".$data["Inkoopprijs"]."<br>";
}

} catch (PDOException $e) {
die ("Error!: ".$e-->getMessage());
}

?>
</main>

</body>

</html>