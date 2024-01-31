<?php
include "../../config/autoload.php";

$base = new Bd();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  if (isset($_GET['email']) && isset($_GET['pwd'])) {
    $email = $_GET['email'];
    $usu = new User($email, "", "", "", "");
    $usu = $usu->search($base->link);
    if ($usu) {
      $pwd = $_GET['pwd'];
      if (password_verify($pwd, $usu['pwd'])) {
        echo json_encode($usu);
        exit();
      } else {
        echo json_encode('noConfirmado');
        exit();
      }
    }
  } else {
    $dato = User::getAll($base->link);
    header("HTTP/1.1 200 OK");
    echo json_encode($dato);
    exit();
  }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $passwd = password_hash($_POST['pwd'], PASSWORD_DEFAULT);
  $cli = new User($_POST['email'], $_POST['names'], $_POST['username'], $passwd, "noAdmin");

  if ($cli->search($base->link)) {
    echo json_encode('noInsertado');
    exit();
  } else {
    $cli->insertUser($base->link);
    echo json_encode('insertado');
    exit();
  } 
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  
    $user = new User($_GET['email'], "", "", "", "");

    if($user->search($base->link)){
      $user->deleteUser($base->link);
      http_response_code(200);
      echo json_encode("Usuario eliminado correctamente");
      exit();
    }else {
      http_response_code(404);
      echo json_encode("Usuario no encontrado o no se pudo eliminar");
      exit();
    }
}
