const UserManager = require('./managerUser.dao');
const ReviewManager = require('./managerReview.dao');
const PhotoManager = require('./managerPhoto.dao');
const PublicationManager = require('./managerPublication.dao');
const BookingManager = require('./managerBooking.dao');
const FavoriteManager = require('./managerFavorite.dao');

module.exports = { UserManager, ReviewManager, PublicationManager, BookingManager, FavoriteManager, PhotoManager };
