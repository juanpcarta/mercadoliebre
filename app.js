const express = require('express');

const app = express ();

let path = require ("path");

app.use(express.static('public'));

app.listen(4011, ()=>{ console.log('Servidor corriendo en http://localhost:4011/'); });

app.get('/', (req,res)=>{    res.sendFile(path.resolve("./views/home.html")); });

