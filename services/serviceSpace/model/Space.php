<?php

class Space
{
  private $space_id;
  private $space_name;

  function __construct($space_id, $space_name)
  {
    $this->space_id = $space_id;
    $this->space_name = $space_name;
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
    try {
      $query = "INSERT INTO spaces VALUES(:space_id, :space_name)";
      $result = $link->prepare($query);

      $space_id = $this->space_id;
      $space_name = $this->space_name;

      $result->bindParam(':space_id', $space_id);
      $result->bindParam(':space_name', $space_name);

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
      $query = "SELECT * FROM spaces WHERE space_id ='$this->space_id'";
      $result = $link->prepare($query);
      $result->execute();
    } catch (PDOException $e) {
      echo json_encode(['error' => $e->getMessage()]);
      die();
    }
  }
}
