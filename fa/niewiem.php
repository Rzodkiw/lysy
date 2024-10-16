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
$mysqli = mysqli_connect('127.0.0.1', 'root', '', 'user');
 $krzeslo=$_GET['Login'] ;
 $krzeslo1=$_GET['Haslo'] ;
 $q="INSERT INTO `user` (`ID`, `Login`, `Hasło`, `Szyfrowane`) VALUES ('', '$krzeslo', '$krzeslo1', '')";
 $mysqli->query($q);
 ?>
</body>
</html>