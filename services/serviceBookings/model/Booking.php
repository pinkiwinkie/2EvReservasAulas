<?php

class Booking
{
  private $email;
  private $space_id;
  private $start_date;
  private $end_date;
  private $is_pattern;

  public function __construct($email, $space_id, $start_date, $end_date, $is_pattern)
  {
    $this->email = $email;
    $this->space_id = $space_id;
    $this->start_date = $start_date;
    $this->end_date = $end_date;
    $this->is_pattern = $is_pattern;
  }

  public static function getAll($link)
  {
    try {
      $query = "SELECT * FROM bookings";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      // Manejo de errores en caso de fallo en la consulta
      echo "Error al obtener todas las reservas: " . $e->getMessage();
      return false;
    }
  }

  public function insertarReserva($link)
  {
    try {
      $query = "INSERT INTO bookings (email, space_id, start_date, end_date, is_pattern) 
                  VALUES (:email, :space_id, :start_date, :end_date, :is_pattern)";
      $result = $link->prepare($query);

      $result->bindParam(':email', $this->email);
      $result->bindParam(':space_id', $this->space_id);
      $result->bindParam(':start_date', $this->start_date);
      $result->bindParam(':end_date', $this->end_date);
      $result->bindParam(':is_pattern', $this->is_pattern);

      $result->execute();
      return true; // Retorna true si la inserción fue exitosa
    } catch (PDOException $e) {
      // Manejo de errores en caso de fallo en la inserción
      echo "¡Error al insertar reserva!: " . $e->getMessage();
      return false; // Retorna false si hay un error en la inserción
    }
  }
}
