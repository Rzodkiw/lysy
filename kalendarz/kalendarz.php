<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="wyglad.css">
    <title>Document</title>
</head>
<body>
    <table>
<?php
$con= new mysqli("127.0.0.1","root","","kalendarz");
$q="SELECT * FROM kalendarz";
echo"<th>Wrzesien</th>";
if ($wynik = $con->query($q))
$licznik=0;
for($i=0; $i<5; $i++){
    echo"<tr>";
    for($j=0;$j<7;$j++){
        $licznik++;
        $row=$wynik->fetch_array();
        if($licznik<31){
            echo"<td>".$licznik."<br>".$row['opis']."</td>";

        }
    }
    echo"</tr>";
}

?>
</table>
</body>
</html>
