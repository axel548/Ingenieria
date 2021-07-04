
function cargar(filename, filetype){
	if (filetype=="js"){
		var fileref=document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
	} else if(filetype=="css"){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

cargar('comunes/js/navegacion.js','js');
cargar('menu/Menu.css','css');
/*cargar('menu/domMenu_min.js','js');
cargar('menu/domMenu_items.js','js');*/

var altoEncabezado = 75;
var anchoPubliDer = 160;
var minimoAncho = 700;
function resize()
{
    if (self.innerHeight) { 
	    anchoPag = self.innerWidth;
        altoPag = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientWidth) { 
        anchoPag = document.documentElement.clientWidth;
        altoPag = document.documentElement.clientHeight;
    } else if (document.body.clientHeight) { 
        altoPag = document.body.clientHeight;
        anchoPag = document.body.clientWidth;
    } else {
		exit;
	}
  document.getElementById('contenedor').style.height=(altoPag-altoEncabezado)+'px';
  if(document.getElementById('principal')){
    document.getElementById('principal').style.width=(anchoPag-20)+'px';
    document.getElementById('texto_pagina').style.width =(anchoPag-anchoPubliDer-25)+'px';
    document.getElementById('publi_derecha').style.width =anchoPubliDer+'px';
    var ancho=document.getElementById('texto_pagina').style.width;
    ancho=ancho.replace('px','');
    if ((ancho!='')&&(ancho<minimoAncho)){
	  document.getElementById('texto_pagina').style.width='700px';
	  document.getElementById('principal').style.width=(minimoAncho+25+anchoPubliDer)+'px';
    }
  }
}

window.onresize = resize;
window.onload = resize;
