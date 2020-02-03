<?php

$dbDsn = 'mysql:host=localhost;dbname=st-21_genyloic_blog;charset=utf8';
$dbUser = "genyloic";
$dbPass = "33d62328ZDVhOTZlOGY4ODEzMmQ1ODQ2OTIzOGI10d64063d";

$db = new PDO($dbDsn,$dbUser,$dbPass, [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);