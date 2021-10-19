/**
 * @autor Rixio Danilo Iguarán Chourio.
 * @cédula-profesional 12196442
 * @correo-eletrónico atencion.clientes@obringolfo.com
 * @denominacion OBRAS INFORMÁTICAS DEL GOLFO
 * @empresa OBRINGOLFO S.A.S. DE C.V.
 * @proyecto  WINDOWS PAQUETE ADMINISTRATIVO CONTABLE (WinPAC).
 * @copyright 2021
 */


    /** [GENERANDO DIALOGOS DE CONFIRMACIÓN] **/
	function ConfirmAeroWindow(idCONFIRM, confirmMESSAGE) {
		Randomnumber = Math.floor(Math.random() * 1000000);
        var CodeW = '<div id="confirmMODAL" class="confirmMODAL"><div id="' + idCONFIRM + '" class="dialogCONFIRM"><label id="confirmTEXT" class="confirmTEXT">' + confirmMESSAGE + '</label><div id="confirmBUTTONS" class="confirmBUTTONS"><button class="cmdVERDE" id="confirmSI" name="confirmSI" type="button">Sí</button><button class="cmdROJO" id="confirmNO" name="confirmNO" type="button">No</button></div></div></div>';
		$('body').append(CodeW);
		WindowOuterWidth = 350;
		WindowOuterHeight = 180;
        $("#confirmMODAL").show();
		$('#'+idCONFIRM).AeroWindow({
			WindowElementID: idCONFIRM,
            WindowDesktopIconFile: '/library/img/icons/aero/073.png',
			WindowTitle: 'WinPAC &#174; - Confirmación del sistema.',
			WindowPositionTop: 'center',
			WindowPositionLeft: 'center',
			WindowStatus: 'window',
			WindowOuterWidth: WindowOuterWidth,
			WindowOuterHeight: WindowOuterHeight,
			WindowDesktopIcon: false,
			WindowResizable: false,
			WindowMaximize: false,
			WindowMinimize: false,
			WindowClosable: false            
		});
        $("body #tmpIcon").remove();
	}


    /** [GENERANDO DIALOGOS DE INFORMACIÓN] **/
	function InfoAeroWindow(idINFO, infoMESSAGE) {
		Randomnumber = Math.floor(Math.random() * 1000000);
        var CodeW = '<div id="infoMODAL" class="infoMODAL"><div id="' + idINFO + '" class="dialogINFO"><label id="infoTEXT" class="infoTEXT">' + infoMESSAGE + '</label><div id="infoBUTTONS" class="infoBUTTONS"><button class="cmdVERDE" id="infoACEPTAR" name="infoACEPTAR" type="button">Aceptar</button></div></div></div>';
		$('body').append(CodeW);
		WindowOuterWidth = 450;
		WindowOuterHeight = 180;
        $("#infoMODAL").show();
		$('#'+idINFO).AeroWindow({
			WindowElementID: idINFO,
            WindowDesktopIconFile: '/library/img/icons/aero/072.png',
			WindowTitle: 'WinPAC &#174; - Información del sistema.',
			WindowPositionTop: 'center',
			WindowPositionLeft: 'center',
			WindowStatus: 'window',
			WindowOuterWidth: WindowOuterWidth,
			WindowOuterHeight: WindowOuterHeight,
			WindowDesktopIcon: false,
			WindowResizable: false,
			WindowMaximize: false,
			WindowMinimize: false,
			WindowClosable: false            
		});
        $("body #tmpIcon").remove();
        $("#"+idINFO).find('#infoACEPTAR').click(function(e) {
            $("#infoMODAL").remove();
            $("#Taskbar"+idINFO).remove();
        });
        
	}
