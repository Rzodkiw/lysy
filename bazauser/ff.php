<?php
$con=new mysqli("127.0.0.1","root","","user");
$n=$_GET['ID'];
$q="SELECT * FROM user WHERE ID='".$n."'";
$wynik = $con->query($q);
while($row=$wynik->fetch_array()){
    echo $row["Login"].";".$row["Hasło"]."<br/>";
}

?>