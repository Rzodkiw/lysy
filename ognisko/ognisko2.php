<?php
$login=$_GET['login'] ;
$haslo=$_GET['haslo'] ;
$con= new mysqli("127.0.0.1","root","","ognisko");
$q="SELECT login, haslo FROM ognisko WHERE login='$login' AND haslo='$haslo'";
if($wynik=$con->query($q))
while($row=$wynik->fetch_array())
if($login==$row["login"] && $haslo==$row["haslo"]){
echo "jest";
}
else{
    echo "brak";
}
?>