<?php

class Space
{
  private $space_id;
  private $space_name;
  private $max_advance_bookings_days;

  function __construct($space_id, $space_name, $max_advance_bookings_days)
  {
    $this->space_id = $space_id;
    $this->space_name = $space_name;
    $this->max_advance_bookings_days = $max_advance_bookings_days;
  }

  static function getAll($link)
  {
    try {
      $query = "SELECT * FROM spaces";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function insertSpaces($link)
  {
    try{
      $query = "INSERT INTO spaces VALUES(:space_id, :space_name, :max_advance_bookings_days)";
      $result = $link->prepare($query);

      $space_id = $this->space_id;
      $space_name = $this->space_name;
      $max_advance_bookings_days = $this->max_advance_bookings_days;

      $result->bindParam(':space_id', $space_id);
      $result->bindParam(':space_name', $space_name);
      $result->bindParam(':max_advance_bookings_days', $max_advance_bookings_days);

      $result->execute();
      return $result;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
