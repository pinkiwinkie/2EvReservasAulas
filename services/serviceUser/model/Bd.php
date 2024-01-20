<?php
const BASE='reservaAulas';
const HOST='localhost';
const USER ='root';
const PASS='';
const OPTIONS = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET
NAMES utf8", PDO::ATTR_ERRMODE =>
PDO::ERRMODE_EXCEPTION,PDO::ATTR_PERSISTENT =>true);

class Bd{
    private $link;
    function __construct()
    {
        try{
            $this->link = new PDO("mysql:host=".HOST.";dbname=".BASE,USER,PASS,OPTIONS);
        }catch(PDOException $e){
            $dato= "¡Error!: " . $e->getMessage() . "<br/>";
			require "../views/messageError.php";
			die();
        }
    }
    function __get($var){
		return $this->$var;
	}
}