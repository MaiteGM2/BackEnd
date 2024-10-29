const express = import('express');
const { logger, authenticate, validateUser } = import('./middlewares');
const app = express();

app.use(express.json());
app.use(logger);

app.post('/register', validateUser, (req, res) => {
    res.status(201).json({ message: 'Usuario registrado con éxito', user:
    req.body });
});

app.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'Acceso permitido a ruta protegida' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error en el servidor');
});

const port = 2500;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });