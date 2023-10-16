const Database = require("../config/mongodb");
//funciones de factory, funciones normalizdas para acceder a la bd
const { createDocument, allDocument, deleteDocument } = require("../config/factory");

const {FavoriteModel} = require("../models/index");

class FavoriteManager {
    constructor(){
        this.db = new Database();
        this.createDocument= createDocument;
        this.allDocument = allDocument;
        this.deleteDocument = deleteDocument;

    }

    async createFavorite (data) {
        console.log("quien pa es data??-->", data  )
        const {
            publicationId,
            userId,
        } = data;

        const fav = FavoriteModel({
            userId,
            publicationId
        });
        await this.createDocument("favoriteCollection", fav )
    }


    async getAllFavorites() {
        try {
            const favs = await this.allDocument('favoriteCollection');
            return favs;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener los favoritos: ${error.message}`);
        }
    }


    async deleteFavorite( publicationId) {
        console.log("a quien pa tengo aca en el delete manager dao? ->", publicationId)
        try {
            const toDelete = { publicationID: publicationId };
            const result = await this.deleteDocument("favoriteCollection", toDelete);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar el favorito: ${error.message}`);
        }
    }


}

module.exports = FavoriteManager;