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
				inner += "<li><span onclick='mostrar(\""+file+"\")'>" + file + "</span></li>\n";
			}
			inner += "</ul>\n";

			listDiv.innerHTML = inner;

		}
	};
	xhttp.open("GET", "/listar");
	xhttp.send();
}

function mostrar(file){
	const url = 'http://localhost:4000/mostrar';

	const data = {
		text: file
	}

	const request = {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}

	http = fetch(url, request);

	http.then(
		response => response.json()
	).then(
		data => {
			let text = data.text;
			//text = text.replaceAll(/\n/g, "<br>");
			document.querySelector("#Texto").innerHTML = text;
		}
	)
}