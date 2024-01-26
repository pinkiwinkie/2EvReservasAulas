<?php
spl_autoload_register(function ($clase) {
  include "./model/$clase.php";
});