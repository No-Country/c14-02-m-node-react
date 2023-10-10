console.clear();
const express = require('express');
require('dotenv').config();
const app = express();
const UserRoueter = require('./src/routes/userRouter.js');

// Middlewares de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas user
app.use('/user', UserRoueter);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));
