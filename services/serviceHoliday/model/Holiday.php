<?php
class Holiday
{
  private $holiday_date;
  private $holiday_name;

  function __construct($date, $name)
  {
    $this->holiday_date = $date;
    $this->holiday_name = $name;
  }

  static function getAll($link)
  {
    try {
      $query = "SELECT * FROM holidays";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function insertHoliday($link)
  {
    try {
      $query = "INSERT INTO holidays(holiday_date, holiday_name) VALUES(:holiday_date, :holiday_name)";
      $result = $link->prepare($query);

      $holiday_date = $this->holiday_date;
      $holiday_name = $this->holiday_name;

      $result->bindParam(':holiday_date', $holiday_date);
      $result->bindParam(':holiday_name', $holiday_name);

      $result->execute();
      return $result;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      echo "Query: " . $query;  // Print or log the query
      die();
    }
  }

  function search($link)
  {
    try {
      $query = "SELECT * FROM holidays WHERE holiday_date='$this->holiday_date'";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
