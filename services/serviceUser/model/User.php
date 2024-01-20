<?php
class User
{
  private $email;
  private $names;
  private $username;
  private $pwd;
  private $user_type;

  function __construct($email, $names, $user, $pwd, $user_type)
  {
    $this->names = $names;
    $this->username = $user;
    $this->email = $email;
    $this->pwd = $pwd;
    $this->user_type = $user_type;
  }

  static function getAll($link)
  {
    try {
      $query = "SELECT * FROM users";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  function insertUser($link)
  {
    try {
      $query = "INSERT INTO users VALUES (:email, :names, :username, :pwd, :user_type)";
      $result = $link->prepare($query);

      $email = $this->email;
      $names = $this->names;
      $username = $this->username;
      $pwd = $this->pwd;
      $user_type = $this->user_type;


      $result->bindParam(':email', $email);
      $result->bindParam(':names', $names);
      $result->bindParam(':username', $username);
      $result->bindParam(':pwd', $pwd);
      $result->bindParam(':user_type', $user_type);

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
      $query = "SELECT * FROM users WHERE email='$this->email'";
      $result = $link->prepare($query);
      $result->execute();
      return $result->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
