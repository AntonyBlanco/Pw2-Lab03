const path = require('path');
const express = require('express');
const fs = require('fs')
const bp = require('body-parser');
const { response } = require('express');

const MarkdownIt = require('markdown-it')
const md = new MarkdownIt();

const app = express();

const publicDir = "pub";

app.use(express.static('pub'));
app.use(bp.json())
app.use(bp.urlencoded({
    extended:true
}))

app.listen(4000, () => {
    console.log("Escuchando en el puerto 4000");
});


//Rutas
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/FormMarkdown', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'form.html'));

});

app.post('/FormMarkdown', (request, response) => {
    console.log(request.body);

	let fileName = request.body.tituloM;
	let fileContent = request.body.textoM;
	
	fs.readdir("./Files", (err, files) => {
		let jsonResponse;
		if(files.includes(fileName)){
			jsonResponse = {message: "El archivo ya existe."};
			response.json(jsonResponse);
		} else {

			fs.writeFile('Files/' + fileName, fileContent, function (err) {
				if (err){
					jsonResponse = {message: "Se presento un error inesperado en el servidor."};
					response.json(jsonResponse);
					throw err;
				} else {
					jsonResponse = {message: "El archivo fue creado con exito"};
					response.json(jsonResponse);
					console.log('Saved!');
				}
			});

		}
	});

});

app.get('/listar', (request, response) => {
	let objectSend = {};
	let dirName = "Files";
	objectSend.dirName = dirName;
	fs.readdir(dirName, (err, files) => {
		objectSend.fileArray = files;
		response.send( objectSend );
	});
});
app.get("/crear", (request, response) => {
	let jsonContent = request.body;
	jsonContent.text;
});

app.post("/mostrar", (request, response) => {
    let file = request.body.text;
    console.log(file);
    fs.readFile("Files/"+file, (err, content) => {
        content = md.render(content.toString())
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({
            text: content
        }))
    });
});
