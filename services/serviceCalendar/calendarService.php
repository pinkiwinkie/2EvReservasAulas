<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $dato = Calendar::getAll($base->link);
  header("HTTP/1.1 200 OK");
  echo json_encode($dato);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $calendar = new Calendar($_POST['horario_name'], $_POST['start_time'], $_POST['end_time'], $_POST['number_of_periods'], $_POST['hour_of_periods'], $_POST['time_per_period'], $_POST['duration_per_hour']);

  if($calendar->search($base->link)){
    echo json_encode('noInsertado');
    exit();
  } else {
    $calendar->insertCalendar($base->link);
    echo json_encode('insertado');
    exit();
  }
}