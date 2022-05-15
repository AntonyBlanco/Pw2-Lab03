document.addEventListener("DOMContentLoaded", () => {
	updateFileList();
});

function updateFileList(){
	let listDiv = document.querySelector("#listaArchivos");
	let inner = "<ul>";
	let jsonResponse;
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			jsonResponse = this.responseText;
			console.log(responseText);
		}
	};
	xhttp.open("GET", "/listar");
	xhttp.send();
	for(;;){
		break;
	}
}
