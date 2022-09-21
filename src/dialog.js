const dialog	= document.getElementById("Dialog"); // Get element.
const content	= document.getElementById("DialogContent");

function show_dialog(information){
	dialog.style.visibility	= "visible";
	content.innerHTML	= information;
}

function hide_dialog(){
	dialog.style.visibility	= "hidden";
}

function clicked (conteudo){
	if (dialog.style.visibility == 'visible'){
		hide_dialog();
	} else {
		show_dialog(conteudo);
	}
}
