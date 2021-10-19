<?php
	
$enlace = mysqli_connect("localhost", "inpecmx", "plP1cAswA2", "inpecmx_winpac");

if (!$enlace) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}



/* Crear una tabla que no devuelve un conjunto de resultados */
$result = mysqli_query($enlace, "CREATE DATABASE inpecmx_IUCR780923MJ6;");
print_r($result);


mysqli_close($enlace);    
    
    
    
?>