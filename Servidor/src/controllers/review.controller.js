const { isValidObjectId } = require('mongoose');
const { ReviewManager } = require('../dao');
const reviewManager = new ReviewManager();

module.exports = {
	createReview: async (req, res) => {
		try {
			const data = req.body;
			const newReview = await reviewManager.createReview(data);

			return res.status(200).send(newReview);
		} catch (error) {
			console.error('Error al crear la reseña', error);
			return res.status(400).send(error);
		}
	},

	getReview: async (req, res) => {
		try {
			const id = req.params;
			const review = await reviewManager.getOneReview(id);
			return res.status(200).send(review);
		} catch (error) {
			console.error('Error al obtener la reseña', error);
			return res.status(400).send(error);
		}
	},

	getAllReviews: async (req, res) => {
		try {
			const reviews = await reviewManager.getAllReview();
			return res.status(200).send(reviews);
		} catch (error) {
			console.error('Error al obtener todas las reseñas', error);
			return res.status(400).send(error);
		}
	},

	updateReview: async (req, res) => {
		try {
			const id = req.params;
			const changes = req.body;

			const review = await reviewManager.updateReview(id, changes);
			if (review.matchedCount > 0) {
				const reviewUpdate = await reviewManager.getOneReview(id);
				return res.status(200).send(reviewUpdate);
			}
		} catch (err) {
			console.error('Error al actualizar la reseña', err);
			return res.status(400).send(err);
		}
	},

	deleteReview: async (req, res) => {
		try {
			const { id } = req.params;
			if (!isValidObjectId(id)) {
				res.status(400).json({ error: 'Id invalido' });
				return;
			}
			const review = await reviewManager.deleteReview(id);
			if (review.deletedCount !== 1) {
				res.status(404).json({ error: 'Reseña no encontrada' });
				return;
			}
			res.status(200).json({ message: 'Reseña eliminada correctamente' });
		} catch (error) {
			console.log('Error al eliminar la reseña', error.message);
			res.status(500).json({ error: error.message });
		}
	},
};
