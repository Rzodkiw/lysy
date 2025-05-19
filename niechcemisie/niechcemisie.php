<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
echo "<form method='get' action='usun.php'>";
$con=new mysqli("127.0.0.1","root","","egzamin");
$q="SELECT * FROM zawodnik";
if($wynik=$con->query($q))
while($row=$wynik->fetch_array())
echo "<input type='checkbox'> ".$row["id"]." ".$row["imie"]." ".$row["nazwisko"]."<br>";
echo "<input type='Submit' name='Submit'> ";
echo "</form>"
?>
</body>
</html>