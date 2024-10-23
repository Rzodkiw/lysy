<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="get" action="ff.php">
<?php
$con=mysqli_connect("127.0.0.1","root","","user");

$wynik = mysqli_query($con,"SELECT * FROM user");

while($row = mysqli_fetch_array($wynik))

echo("<input type='radio' name='ID' value=".$row[0].">". $row[1] . ";" . $row[2] . "<br/>");
?> 
<input type="reset" name="Reset"><input type="Submit" name="Submit">
</body>
</html>