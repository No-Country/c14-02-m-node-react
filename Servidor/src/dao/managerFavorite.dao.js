const Database = require('../config/mongodb');
//funciones de factory, funciones normalizdas para acceder a la bd
const { createDocument, getAllDocuments, deleteDocument } = require('../config/factory');

const { FavoriteModel } = require('../models/index');

class FavoriteManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getAllDocuments = getAllDocuments;
        this.deleteDocument = deleteDocument;
	}

	async createFavorite(data) {
		const { publicationId, userId } = data;

		const fav = FavoriteModel({
			userId,
			publicationId,
		});
		await this.createDocument('favoriteCollection', fav);
	}



    async deleteFavorite( publicationId) {
        console.log("a quien pa tengo aca en el delete manager dao? ->", publicationId)
        try {
            const toDelete = { publicationId: publicationId };
            const result = await this.deleteDocument("favoriteCollection", toDelete);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar el favorito: ${error.message}`);
        }
    }


	async getAllFavorites() {
		try {
			const favs = await this.getAllDocuments('favoriteCollection');
			return favs;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener los favoritos: ${error.message}`);
		}
	}
}

module.exports = FavoriteManager;
