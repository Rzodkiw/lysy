<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form method="get">
    <input type="number" name="kol">
    <input type="number" name="rze">
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>
<?php
if(isset($_GET['kol'])){
    $cyfr=$_GET['kol'];
}
if(isset($_GET['rze'])){
    $cyfr2=$_GET['rze'];
}
for($y=1;$y<=$cyfr;$y++){
for($x=1;$x<=$cyfr2;$x++){
    echo "<div id='tabelka'>".$x."<img src'".$x.".jpg'>";
    echo "<img src='2.jpg'></div>";
}
}
?>
</body>
</html>