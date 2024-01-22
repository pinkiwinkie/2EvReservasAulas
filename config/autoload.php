<?php
spl_autoload_register(function ($clase) {
  include "./services/model/$clase.php";
});