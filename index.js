const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080; // Porta que o servidor irá ouvir

app.use(express.json());
app.use(cors());

// Rota de exemplo
const motivosHandlers = require("./api/motivosGet");
app.get('/motivos', motivosHandlers.getHandler);
app.post('/motivos', motivosHandlers.postHandler);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});