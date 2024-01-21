<?php
class Calendar
{
  private $horario_name;
  private $start_time;
  private $end_time;
  private $number_of_periods;
  private $hour_of_periods;
  private $time_per_period;
  private $duration_per_hour;

  function __construct($horario_name, $start_time, $end_time, $number_of_periods,$hour_of_periods, $time_per_period, $duration_per_hour)
  {
    $this->horario_name = $horario_name;
    $this->start_time = $start_time;
    $this->end_time = $end_time;
    $this->number_of_periods = $number_of_periods;
    $this->hour_of_periods =$hour_of_periods;
    $this->time_per_period = $time_per_period;
    $this->duration_per_hour = $duration_per_hour;
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
      $query = "INSERT INTO calendario VALUES(:horario_name, :start_time, :end_time, :number_of_periods, :hour_of_periods, :time_per_period, :duration_per_hour)";
      $result = $link->prepare($query);


      $horario_name = $this->horario_name;
      $start_time = $this->start_time;
      $end_time = $this->end_time;
      $number_of_periods = $this->number_of_periods;
      $time_per_period = $this->time_per_period;
      $duration_per_hour = $this->duration_per_hour;

      $result->bindParam(':horario_name', $horario_name);
      $result->bindParam(':start_time', $start_time);
      $result->bindParam(':end_time', $end_time);
      $result->bindParam(':number_of_periods', $number_of_periods);
      $result->bindParam(':time_per_period', $time_per_period);
      $result->bindParam(':duration_per_hour', $duration_per_hour);

      $result->execute();
      return $result;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function search($link)
  {
    try {
      $query = "SELECT * FROM calendario WHERE horario_name='$this->horario_name'";
      $result = $link->prepare($query);
      $result->execute();
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
