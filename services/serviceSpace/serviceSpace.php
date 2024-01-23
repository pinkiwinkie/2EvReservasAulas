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
  $space = new Space($_POST['space_name']);

  // Intentar realizar la inserción
  $inserted = $space->insertSpaces($base->link);

  if ($inserted) {
    // Inserción exitosa
    header("HTTP/1.1 200 OK");
    echo json_encode(['status' => 'insertado', 'message' => 'Inserción exitosa.']);
    exit();
  } else {
    // Ya existe o fallo en la inserción
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(['status' => 'noInsertado', 'message' => 'El espacio ya existe o fallo en la inserción.']);
    exit();
  }
}