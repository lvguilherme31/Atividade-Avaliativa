const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota que gera a tabuada dinamicamente
app.get('/tabuada', (req, res) => {
  const numero = parseInt(req.query.tabuada) || 1;  // Padrão: 1
  const limite = parseInt(req.query.sequencia) || 10;  // Padrão: 10

  let resultado = `<h1>Tabuada do ${numero}</h1>`;
  for (let i = 0; i <= limite; i++) {
    resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }

  res.send(`
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabuada do ${numero}</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          ${resultado}
        </div>
      </body>
    </html>
  `);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
