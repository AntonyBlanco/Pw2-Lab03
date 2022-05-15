const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('pub'));

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/mostrar', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'form.html'));
})
app.post('/mostrar', (request, response) => {
    fs.readFile(path.resolve(__dirname, 'pub/prueba.txt'), 'utf8',
        (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({
                    error: 'message'
                })
                return
            }
            let htmlText = md.render(data);
            response.json({
                text: htmlText.replace((/\n/g, '<br>'))
            })
        })

});