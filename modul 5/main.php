<?php
include "app/Router/productRouter.php";
header("Content-Type: application/json; charset=UTF-8");

use app\Router\productRouter;

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$productRoute = new productRouter();
$productRoute->handle($method, $path);

?>