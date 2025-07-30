const express = require('express');
const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Saludo de Nanis</title>
      <link href="https://fonts.googleapis.com/css2?family=Caudex&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Caudex', serif;
          background-color: #fef9f4;
          color: #663300;
          padding: 2rem;
          max-width: 600px;
          margin: auto;
          border-radius: 20px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <h1>¡Hola! 🌟</h1>
      <p>Hola a todo aquel que quiera ver este proyecto</p>
    </body>
    </html>
  `);
});


app.get('/presentacion', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Presentación de Nanis</title>
      <link href="https://fonts.googleapis.com/css2?family=Caudex&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Caudex', serif;
          background-color: #e6f0ff;
          color: #003366;
          padding: 2rem;
          max-width: 700px;
          margin: auto;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        h1 {
          color: #336699;
        }
        a {
          color: #336699;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <h1>¡Hola! Soy Alanis, pero me dicen Nanis 💙</h1>
      <p>Desde pequeña me llaman Nanis. Me gustan las galletas 🍪, la moda en Colombia, las flores 🌸 y disfruto mi tiempo libre leyendo y estudiando cosas relacionadas con mi carrera (como en este caso jeje).</p>
      <p>Tengo dos perros hermosos: <strong>Onix</strong> y <strong>Domino</strong> 🐶🐶.</p>
      <h2>Donde puedes encontrarme:</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/alanis-nicole-forero-salas-77508aa4" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/nanis.f04" target="_blank">Instagram (@nanis.f04)</a></li>
        <li><a href="https://github.com/Alan1s" target="_blank">GitHub (Alan1s)</a></li>
      </ul>
      <p>✨ Me alegra que estés aquí ✨</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
