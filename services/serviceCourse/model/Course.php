<?php

class Course
{
  private $startDate;
  private $endDate;

  public function __construct($startDate, $endDate)
  {
    $this->startDate = $startDate;
    $this->endDate = $endDate;
  }

  public static function getAll($link)
  {
    try {
      $query = "SELECT * FROM curso";
      $statement = $link->prepare($query);
      $statement->execute();
      $result = $statement->fetchAll(PDO::FETCH_ASSOC);
      return $result;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function insertCourse($link)
  {
    try {
      $query = "INSERT INTO curso(fechaInicio, fechaFin) VALUES(:startDate, :endDate)";
      $result = $link->prepare($query);

      $startDate = $this->startDate;
      $endDate = $this->endDate;

      $result->bindParam(':startDate', $startDate);
      $result->bindParam(':endDate', $endDate);

      $result->execute();
      return $result;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
