const fs = require("fs");
const path = require('path');
const express = require('express');

const app = express();

const publicDir = "pub";

app.use(express.static(publicDir));

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

// Listar archivos
app.get('/listar', (request, response) => {
	let objectSend = {};
	let dirName = publicDir;
	objectSend.dirName = dirName;
	fs.readdir(publicDir, (err, files) => {
		objectSend.fileArray = files;
		response.send( objectSend );
	});
});
app.get("/crear", (request, response) => {
	let jsonContent = request.body;
	jsonContent.text;
});
app.get("/mostrar", (req, res) => {
	console.log("mostrando");
});
