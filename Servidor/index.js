console.clear();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

const { userRoutes, reviewRoutes, publicationRoutes, bookingRoutes, favoriteRoutes, photoRoutes } = require('./src/routes');

// Middlewares de express

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());


// Routes
app.use('/api/user', userRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/favorite', favoriteRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));
