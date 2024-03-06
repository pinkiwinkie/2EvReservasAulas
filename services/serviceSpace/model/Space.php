<?php

class Space
{
  private $space_name;

  function __construct($space_name)
  {
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
      if ($this->spaceExists($link)) {
        return false;
      }

      $query = "INSERT INTO spaces(space_name) VALUES(:space_name)";
      $result = $link->prepare($query);

      $space_name = $this->space_name;

      $result->bindParam(':space_name', $space_name);

      $result->execute();
      
      return $result->rowCount() > 0; 
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function spaceExists($link)
  {
    try {
      $query = "SELECT * FROM spaces WHERE space_name = :space_name";
      $result = $link->prepare($query);
      
      $space_name = $this->space_name;

      $result->bindParam(':space_name', $space_name);
      
      $result->execute();

      return $result->rowCount() > 0; 
    } catch (PDOException $e) {
      echo json_encode(['error' => $e->getMessage()]);
      die();
    }
  }
}
