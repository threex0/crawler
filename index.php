<?php
require_once("functions.php");
require_once("env.php");

check_search_params($_GET);
require_once('include/top.php');
print_logo();
print_search_form();
?>