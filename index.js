const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
    res.send("<html><body><h1> Você acessou o projeto</h1></body></html>")
})

app.listen(3000, () => {
    console.log("Esta rodando na porta => 3000");
});


const api = axios.create({
    //Cria a base do axios para reutilizarmos
    baseUrl: "https://swapi.dev/api",
})






