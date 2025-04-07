<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>Piekarnia</header>
    <div id="dol">
    <div id="lewo">
        Asortyment:
        <ul style="list-style-type: square;">
            <li>Bułki</li>
            <li>Chleb</li>
            <li>Pizza</li>
        </ul>   
    </div>
    <div id="prawo">
    <?php
    $con=new mysqli("127.0.0.1","root","","egz");
    $q="SELECT * FROM zawodnik";
    echo"<table><tr><th>liczba</th><th>Imie</th><th>Nazwisko</th></tr>";
    if($wynik=$con->query($q))
    while($row=$wynik->fetch_array())
   
    echo"<tr><td>".$row[0]."</td><td>".$row[2]."</td><td>".$row[3]."</td></tr>";
    echo"</table>";
    ?>
    </div>
    </div>
<footer>©Wszystkie prawa zastrzeżone</footer>
</body>
</html>