// Servidor con el Framework ExpressJS
const express = require("express");
const app = express();

// Acceso a los archivos
app.use(express.static(__dirname));

app.get('/', (require, response) => {
  response.sendFile('index.html', {root: __dirname });
});

app.listen(3100, () => {
    console.log("server started on port 3100");
});

