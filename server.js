const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.listen(4000);
console.log("servidor en el puerto 4000");