const express = require('express');
const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {
  res.send('Hola a todo aquel que quiera ver este proyecto');
});

app.get('/presentacion', (req, res) => {
  res.json({
    nombre: "Alanis Nicole Forero Salas",
    apodo: "Nanis",
    sobre_mi: "Me gustan las galletas, la moda en Colombia, las flores, y leer o estudiar en mi tiempo libre.",
    mascotas: ["Onix", "Domino"],
    redes: {
      linkedin: "https://www.linkedin.com/in/alanis-nicole-forero-salas-77508aa4",
      instagram: "https://www.instagram.com/nanis.f04",
      github: "https://github.com/Alan1s"
    },
    mensaje: "✨ Me alegra que estés aquí ✨"
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
