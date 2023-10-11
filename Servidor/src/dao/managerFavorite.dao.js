const Database = require("../config/mongodb");
//funciones de factory, funciones normalizdas para acceder a la bd
const { createDocument, getOneDocument, allDocument, putUpdateDocument } = require("../config/factory");

const {FavoriteModel} = require("../models/index");

class FavoriteManager {
    constructor(){
        this.db = new Database();
        this.createDocument= createDocument;
        this.allDocument = allDocument;

    }

    async createFavorite (data) {
        const {
            publicationID,
            userID
        } = data;

        const fav = FavoriteModel({
            userID,
            publicationID
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


}

module.exports = FavoriteManager;