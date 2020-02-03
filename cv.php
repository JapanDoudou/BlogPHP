<?php
session_start();

// Pour cette page on chargera le template index.phtml dans le layout
$template = 'cv';
$pageTitle = "Loïc Geny - CV";

// On chargera le layout
include 'layout.phtml';