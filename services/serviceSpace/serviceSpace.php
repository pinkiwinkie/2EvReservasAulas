<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $dato = Space::getAll($base->link);
    header("HTTP/1.1 200 OK");
    echo json_encode($dato);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $postData = json_decode(file_get_contents("php://input"), true);

  foreach ($postData as $item) {
    $space = new Space($item['space_name']);
    $space->insertSpaces($base->link);
  }

  echo json_encode('insertado');
  exit();
}