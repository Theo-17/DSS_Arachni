const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Demo Arachni</h1>
    <form action="/search">
      <input name="q" placeholder="Buscar..." />
      <button>Buscar</button>
    </form>
  `);
});

app.get('/search', (req, res) => {
  const q = req.query.q || '';
  // XSS reflejado sin sanitizar:
  res.send(`
    <h2>Resultados para "${q}"</h2>
    <p>Demo de búsqueda.</p>
  `);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
