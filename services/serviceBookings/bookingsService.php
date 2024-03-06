<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $dato = Booking::getAll($base->link);
  header("HTTP/1.1 200 OK");
  echo json_encode($dato);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $data = json_decode(file_get_contents("php://input"), true);

  // Verificar si se recibió un objeto JSON
  if ($data && is_array($data)) {
    // Acceder a las propiedades de la reserva
    $email = $data['email'];
    $spaceId = $data['space_id'];
    $startDate = $data['start_date'];
    $endDate = $data['end_date'];
    $isPattern = $data['is_pattern'];

    // Crear una nueva reserva
    $reservation = new Booking($email, $spaceId, $startDate, $endDate, $isPattern);

    // Insertar la reserva en la base de datos
    $result = $reservation->insertarReserva($base->link);

    // Verificar el resultado de la inserción
    if ($result) {
      echo json_encode(["message" => "Reserva procesada correctamente"]);
    } else {
      echo json_encode(["error" => "Error al procesar la reserva"]);
    }
  } else {
    // Manejar el caso en que no se reciba un objeto JSON
    echo json_encode(["error" => "Se esperaba un objeto JSON"]);
  }
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  $data = json_decode(file_get_contents("php://input"), true);

  if($data != null){
    if(isset($data['booking_id'])){
      $reservation = new Booking();
      $respone = $reservation->deleteReserva($base->link, $data['booking_id']);
      echo json_encode($response);
      exit();
    }
  }
}