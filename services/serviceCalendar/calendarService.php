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
  $postData = json_decode(file_get_contents("php://input"), true);

  foreach ($postData as $item) {
    $calendar = new Calendar($item['start_time'], $item['end_time']);
    $calendar->insertCalendar($base->link);
  }

  echo json_encode('insertado');
  exit();
}
