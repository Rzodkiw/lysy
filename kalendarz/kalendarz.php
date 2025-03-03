<?php
$con= new mysqli("127.0.0.1","root","","kalendarz");
$q="SELECT id data, opis FROM kalendarz";
$wynik = $con->query($q);
while($row=$wynik->fetch_array()){
echo $row["id"].";".$row["data"].";" .$row["opis"]."<br/>";
}
?>