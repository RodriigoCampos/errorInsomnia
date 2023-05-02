const express = require("express");

const app = express();


app.post("/users", (request, response) => {

    response.send(`Vc chamou o post`)
});

const PORT = 3333;
