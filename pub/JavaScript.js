document.addEventListener("DOMContentLoaded", () => {
	updateFileList();
});

function updateFileList(){
	document.querySelector("#Texto").setAttribute("style","display: none");
	document.querySelector("#divCrear").setAttribute("style","display: none");
	document.querySelector("#listaArchivos").setAttribute("style","display: block");
	document.querySelector("title").innerHTML = "Markdown Wiki";
	document.querySelector("#tituloPagina").innerHTML = "Markdown Wiki";
	document.querySelector("#volverActualizar").innerHTML = "Actualizar";


	let listDiv = document.querySelector("#listaArchivos");
	let inner = "<ul>\n";
	let jsonResponse;
	let url="/listar";

        var promise=fetch(url);
        promise.then(response => response.text())
        .then(data=>{
                jsonResponse = JSON.parse(data);
		//console.log(jsonResponse);
		for(file of jsonResponse.fileArray){
			inner += "<li><span onclick='mostrar(\""+file+"\")'>" + file + "</span></li>\n";
		}
		inner += "</ul>\n";
		listDiv.innerHTML = inner;
        }).catch(error=>{
                console.log("error"+error);
        });
}

function mostrar(file){
	const url = '/mostrar';

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
	).then(
		function(){
			document.querySelector("#listaArchivos").setAttribute("style","display: none");
			document.querySelector("#Texto").setAttribute("style","display: block");
			document.querySelector("title").innerHTML = file;
			document.querySelector("#tituloPagina").innerHTML = file;
			document.querySelector("#volverActualizar").innerHTML = "Volver";
		}
	);
}

function mostrarFormulario(){
	document.querySelector("#divCrear").setAttribute("style","display: block");
}
