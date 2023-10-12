console.clear();
const express = require('express');
require('dotenv').config();
const app = express();

const {
	userRoutes,
	reviewRoutes,
	publicationRoutes,
	bookingRoutes,
	favoriteRoutes,
	photoRoutes,
} = require('./src/routes');

// Middlewares de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/favorite', favoriteRoutes);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));
