<?php
    # CARGANDO LAS CONFIGURACIONES GLOBALES
    require_once $_SERVER['DOCUMENT_ROOT'].'/config/global.conf';
    # CARGANDO LA BASE PARA LOS CONTROLADORES
    require_once PATH_CORE.'controlador.core';
    # CARGANDO LAS FUNCIONES DEL CONTROLADOR FRONTAL
    require_once PATH_CORE.'controlador.lib';
     
    //Cargamos controladores y acciones
    if(isset($_GET["controller"])){
        $controllerObj = cargarControlador($_GET["controller"]);
        lanzarAccion($controllerObj);
    }else{
        $controllerObj = cargarControlador(CONTROLADOR_DEFECTO);
        lanzarAccion($controllerObj);
    }
?>
