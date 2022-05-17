
document.addEventListener("DOMContentLoaded", () => {
	updateFileList();
});

function updateFileList(){
	let listDiv = document.querySelector("#listaArchivos");
	let inner = "<ul>\n";
	let jsonResponse;
	
	let xhttp = new XMLHttpRequest();
	/*
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			jsonResponse = JSON.parse(this.responseText);
			console.log(jsonResponse);
			for(file of jsonResponse.fileArray){
				inner += "<li>" + file + "</li>\n";
			}
			inner += "</ul>\n";
			listDiv.innerHTML = inner;
		}
	};
	//aaa = xhttp;
	xhttp.open("GET", "/listar");
	xhttp.send();
	*/
	
	
	let url="/listar";

	var promise=fetch(url);
	promise.then(response => response.text())
	.then(data=>{
		jsonResponse = JSON.parse(data); 
		console.log("tipe: "+typeof data);
		console.log(jsonResponse);
		for(file of jsonResponse.fileArray){
			inner += "<li>" + file + "</li>\n";
		}
		inner += "</ul>\n";
		listDiv.innerHTML = inner;
	}).catch(error=>{
		console.log("error"+error);
	});
}
