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
  $calendar = new Calendar($_POST['start_time'], $_POST['end_time']);
  $calendar->insertCalendar($base->link);
  echo json_encode('insertado');
  exit();
}
