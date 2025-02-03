<?php
session_start(); 
$_SESSION['zmienna'];
$_SESSION['zmienna'] = $_GET['zmienna'];       
echo $_SESSION['zmienna'];
?>