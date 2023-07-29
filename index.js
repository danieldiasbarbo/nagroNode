const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080; // Porta que o servidor irá ouvir

app.use(express.json());
app.use(cors());

// Rota de exemplo
const motivosController = require("./api/motivosController");
app.get('/motivos', motivosController.getHandler);
app.post('/motivos', motivosController.postHandler);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});