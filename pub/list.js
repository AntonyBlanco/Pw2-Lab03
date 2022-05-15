document.addEventListener("DOMContentLoaded", () => {
	updateFileList();
});

function updateFileList(){
	let listDiv = document.querySelector("#listaArchivos");
	let inner = "<ul>\n";
	let jsonResponse;
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			jsonResponse = JSON.parse(this.responseText);
			//console.log(jsonResponse);
			for(file of jsonResponse.fileArray){
				inner += "<li>" + file + "</li>\n";
			}
			inner += "</ul>\n";

			listDiv.innerHTML = inner;

		}
	};
	aaa = xhttp;
	xhttp.open("GET", "/listar");
	xhttp.send();
}
