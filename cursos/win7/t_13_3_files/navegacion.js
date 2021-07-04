<!-- //
	

function irAnterior(){
var currPage = location;
	if (previous != "end"){
		currPage.href = eval('"' + previous + '"');
	}
	else{
			alert('No se puede retroceder. Es la primera pagina.');
	}
}

function irSiguiente(){
var currPage = location;
	if (next != "end"){
		currPage.href = eval('"' + next + '"');
	}
	else{
			alert('No se puede avanzar. Es la última pagina');
	}
}
function irHome(){
var currPage = location;
	if (home != "end"){
		currPage.href = eval('"' + home + '"');
	}
	else{
			alert('No se puede ir al índice.');
	}
}



	
function mostrar(page)
	{
	var newWin;
	newWin = window.open(page, 'infowin', 'width=800,height=650,scrolling=no,toolbars=no,menubar=no,location=no,directories=no,resizeable=no');
	}
function aviso(page)
	{
	var newWin;
	newWin = window.open(page, 'infowin', 'width=300,height=150,scrolling=no,toolbars=no,menubar=no');
	}
// -->