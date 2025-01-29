<?php
$haslo=$_GET['haslo'] ;
$zsha1=sha1($haslo);
$con= new mysqli("127.0.0.1","root","","ognisko2");
$q="SELECT haslo FROM ognisko2 WHERE haslo='$zsha1'";
$wynik=$con->query($q);
$row=$wynik->fetch_array();
if(sha1($haslo)==$row['haslo']){
echo "jest";
}
else{
    echo "brak";
}
?>