<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $datos = Course::getAll($base->link);
  header("HTTP/1.1 200 OK");
  echo json_encode($datos);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Decodifica los datos JSON del cuerpo de la solicitud
  $requestData = json_decode(file_get_contents('php://input'), true);

  $course = new Course($requestData['fechaInicio'], $requestData['fechaFin']);
  $course->insertCourse($base->link);

  echo json_encode(array("message" => "Curso añadido correctamente"));
  exit();
}
