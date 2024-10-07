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
 $krzeslo=$_GET['Imie'] ;
 $krzeslo1=$_GET['Nazwisko'] ;
 $krzeslo2=$_GET['radio'] ;
 $krzeslo3=$_GET['text'] ;
 $krzeslo4=$_GET['radio1'] ;
 $krzeslo5=$_GET['checkbox'] ;
 $krzeslo6=$_GET['radio2'] ;
 $krzeslo7=$_GET['Pesel'] ;
 $krzeslo8=$_GET['Numer_Telefonu'] ;
 $krzeslo9=$_GET['Adres_e-mail'] ;
 echo("Imie: ");
 echo($krzeslo);
 echo("<br>");  
 echo("Nazwisko: ");
 echo($krzeslo1);
 echo("<br>");  
 echo("Zawód: ");
 echo($krzeslo2);
 echo("<br>"); 
 echo("Adres Zamieszkania: ");
 echo($krzeslo3);
 echo("<br>"); 
 echo("Doświadczenie w zawodzie: ");
 echo($krzeslo4);
 echo("<br>"); 
 echo("Język: ");
 echo($krzeslo5);
 echo("<br>"); 
 echo("Aktualne badania lekarskie: ");
 echo($krzeslo6);
 echo("<br>"); 
 echo("Pesel: ");
 echo($krzeslo7);
 echo("<br>"); 
 echo("Numer Telefonu: ");
 echo($krzeslo8);
 echo("<br>"); 
 echo("Adres e-mail: ");
 echo($krzeslo9);
 echo("<br>"); 
 ?>
 </body>
</html>