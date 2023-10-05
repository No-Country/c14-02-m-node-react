const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3031;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hi',
	});
});

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));
