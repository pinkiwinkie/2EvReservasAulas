<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $dato = Space::getAll($base->link);
    header("HTTP/1.1 200 OK");
    echo json_encode($dato);
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $space = new Space($_POST['space_id'], $_POST['space_name']);

  if($space->search($base->link)){
    echo json_encode('noInsertado');
    exit();
  }else{
    $space->insertSpaces($base->link);
    echo json_encode('insertado');
    exit();
  }
}