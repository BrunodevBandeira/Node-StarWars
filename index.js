const express = require("express");
const axios = require("axios");

const app = express();

const api = axios.create({
    //Cria a base do axios para reutilizarmos
    baseURL: "https://swapi.dev/api",
})


//https://swapi.dev/api/people/1

app.get("/:categoria/:id", async (req, res) => {
    const {categoria, id} = req.params;
    try {
        const {data} = await api.get(`/${categoria}/${id}`);
        const retorno = `
        <html>
            <body>
                <h1> Nome: ${data.name} </h1>
                <h2> Altura: ${data.height} </h2>
                <h3> Peso: ${data.mass} </h3>
            </body>
        </html>
        `;
        res.status(202).send(retorno);
    } catch(error) {
        res.status(404).send("<html><body><h1> Deu Erro... </h1></body></html>")
    }
    // res.send("<html><body><h1> Você acessou o projeto</h1></body></html>")
})

app.listen(3000, () => {
    console.log("Esta rodando na porta => 3000");
});







