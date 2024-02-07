<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $dato = Holiday::getAll($base->link);
  header("HTTP/1.1 200 OK");
  echo json_encode($dato);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $holiday = new Holiday($_POST['holiday_date'], $_POST['holiday_name']);
  if (!$holiday->search($base->link)) {
    $holiday->insertHoliday($base->link);
    echo json_encode('insertado');
  } else {
    echo json_encode('noInsertado');
  }
  exit();
}
