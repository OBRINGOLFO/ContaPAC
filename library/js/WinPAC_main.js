/* **************************************************** */
$(document).ready(function() {
	setInterval('updateClock()', 1000);
});

/* **************************************************** */
window.onload = function() {
    var xLoader = document.getElementById('xCargador');
    xLoader.style.visibility = 'hidden';
    xLoader.style.opacity = '0';
};

/* **************************************************** */
function updateClock () {
    var currentTime = new Date ();
    var currentDay = currentTime.getDate();
    currentDay = ( currentDay < 10 ? "0" : "" ) + currentDay;
    var currentMonth = currentTime.getMonth()+1;
    currentMonth = ( currentMonth < 10 ? "0" : "" ) + currentMonth;
    var currentYear = currentTime.getFullYear();
    var currentHours = currentTime.getHours ( ); 
    var currentMinutes = currentTime.getMinutes ( );
   	var currentSeconds = currentTime.getSeconds ( );
   	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
   	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
   	var timeOfDay = ( currentHours < 12 ) ? "a.m." : "p.m."; 
   	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
   	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
   	var currentTimeString = currentDay + "/" + currentMonth + "/" + currentYear + "</br>" + currentHours + ":" + currentMinutes + " " + timeOfDay;
    $("#TaskbarTime").html(currentTimeString); 
} 

/* **************************************************** */
//FUNCIÓN PARA MOSTRAR LA VENTANA DE INFORMACIÓN
function boxInformar(strTIPO, varMENSAJE, varWINMARCO = null, strDESTINO = null){
    
    $('#boxMENSAJE_INFO').html(varMENSAJE); //Coloco el texto
    $('#boxMENSAJE_icono').removeClass('msg_exito'); //elimino la clase si existe
    $('#boxMENSAJE_icono').removeClass('msg_alerta'); //elimino la clase si existe
    $('#boxMENSAJE_icono').removeClass('msg_error'); //elimino la clase si existe
    
    if(strTIPO.toUpperCase() == "EXITO"){
        var xCLASE = "msg_exito";
    }else if(strTIPO.toUpperCase() == "ALERTA"){
        var xCLASE = "msg_alerta";
    }else  if(strTIPO.toUpperCase() == "ERROR"){
        var xCLASE = "msg_error";
    }else{
        var xCLASE = "msg_alerta";
    }

    $('#boxMENSAJE_icono').addClass(xCLASE); //agrego la clase del tipo
    $('.boxMODAL').show();

    //Generando la ventana de dialogo
 	$('#boxINFORMAR').AeroWindow({
        WindowTitle: 'WinPAC &#174; - Mensaje del sistema.',
		WindowDesktopIconFile: '/library/img/icons/Discussion.png',
		WindowStatus: 'window',
		WindowPositionTop: 'center',
		WindowPositionLeft: 'center',
		WindowOuterWidth: 450,
		WindowOuterHeight: 180,
		WindowDesktopIcon: false,
		WindowResizable: false,
		WindowMaximize: false,
		WindowMinimize: false,
		WindowClosable: false,
		LoadiFrameContentLater: false,
		WindowDraggable: false
 	});
    
    $('#boxOK').click(function(event) {
        $("#boxINFORMAR").hide();
        $('.boxMODAL').hide();
        //console.log('varWINMARCO: '+varWINMARCO);
        if(varWINMARCO != null){
            if(varWINMARCO.toUpperCase() == "ESCRITORIO"){ 
                window.top.location = strDESTINO;
           	}else if(varWINMARCO.toUpperCase() == "IFACE"){
                location.href = strDESTINO;
            }
        }
    });
   
}

/* **************************************************** */
//FUNCIÓN PARA MOSTRAR VENTANA DE CONFIRMACIÓN
function boxConfirmar(varMENSAJE){
    $('#boxMENSAJE').html(varMENSAJE);
    $('.boxMODALC').show();
    $('#boxCONFIRMAR').AeroWindow({
        WindowTitle: 'WinPAC &#174; - Confirme su desición.',
		WindowDesktopIconFile: '/library/img/icons/Help Blue Button.png',
		WindowStatus: 'window',
		WindowPositionTop: 'center',
		WindowPositionLeft: 'center',
		WindowOuterWidth: 300,
		WindowOuterHeight: 180,
		WindowDesktopIcon: false,
		WindowResizable: false,
		WindowMaximize: false,
		WindowMinimize: false,
		WindowClosable: false,
		LoadiFrameContentLater: false,
		WindowDraggable: false
    });
}

/* **************************************************** */
function closeConfirmar(){
    $("#TaskbarboxCONFIRMAR").hide();
    $('#boxMENSAJE').html("");
    $('.boxMODALC').hide();
    $("#boxCONFIRMAR").hide();
}
/* **************************************************** */

/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
