<?php
class Calendar
{
  private $start_time;
  private $end_time;

  function __construct($start_time, $end_time)
  {
    $this->start_time = $start_time;
    $this->end_time = $end_time;
  }

  static function getAll($link)
  {
    try {
      $query = "SELECT * FROM calendario";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function insertCalendar($link)
  {
    try {
      $query = "INSERT INTO calendario(start_time, end_time) VALUES(:start_time, :end_time)";
      $result = $link->prepare($query);

      $start_time = $this->start_time;
      $end_time = $this->end_time;
      
      $result->bindParam(':start_time', $start_time);
      $result->bindParam(':end_time', $end_time);

      $result->execute();
      return $result;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
