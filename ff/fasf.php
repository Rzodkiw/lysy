<?php
setcookie('user', $_GET['Imie'], time()+3600);
echo("Imie: ");
echo $_COOKIE['user'];
echo("<br>");
setcookie('user1', $_GET['Nazwisko'], time()+3600);
echo("Nazwisko: ");
echo $_COOKIE['user1'];
echo("<br>");
setcookie('user2', $_GET['Wiek'], time()+3600);
echo("Wiek: ");
echo $_COOKIE['user2'];
echo("<br>");
    ?>
