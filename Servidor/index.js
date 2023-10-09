const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3031;
const UserRoueter = require('../Servidor/src/routes/userRouter.cjs')

app.use(bodyParser.json());


app.use('/user',UserRoueter)



app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));
