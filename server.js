const path = require('path');
const express = require('express');
const fs = require('fs')
const bp = require('body-parser')
//const MarkdownIt = require('markdown-it')
//const md = new MarkdownIt();

const app = express();

app.use(express.static('pub'));

app.use(bp.json())
app.use(bp.urlencoded({
    extended:true
}))
/*
app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});
*/

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
    
    /*
    var form = require('fs').readFileSync('form.html');
      //  querystring = require('querystring'),
       // util = require('util'),
    var dataString = '';
    
    request.on('data', function(data){
        dataString += data
    })
    */

    /*  
    
    var fs = require('fs');
    fs.readFile('form.html', function (err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
    */    
    
});