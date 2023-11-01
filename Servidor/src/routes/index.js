const userRoutes = require('./user.routes');
const bookingRoutes = require('./booking.routes');
const publicationRoutes = require('./publication.routes');
const reviewRoutes = require('./review.routes');
const favoriteRoutes = require('./favorite.routes');
const photoRoutes = require('./photo.routes');
const mailRoutes = require('./mail.router');

module.exports = {
	userRoutes,
	publicationRoutes,
	reviewRoutes,
	bookingRoutes,
	favoriteRoutes,
	photoRoutes,
	mailRoutes,
};
