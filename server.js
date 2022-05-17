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
    fs.readFile(path.resolve(__dirname, 'pub/prueba'), 'utf8',
        (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({
                    error: 'message'
                })
                return
            }
            response.json({
                text: data.replace(/\n/g, '<br>')
            })
        })

    let markdownTexto = request.body.textoM
    console.log(markdownTexto)
    
    fs.appendFile('pub/prueba', markdownTexto, function(err) {
        if (err) throw err;
        console.log('Guardado!');
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