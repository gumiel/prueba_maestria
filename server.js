const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Buenas noches");
});

app.listen(4000);
console.log("servidor en el puerto 4000");