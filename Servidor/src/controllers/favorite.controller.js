const { FavoriteManager } = require("../dao");
const favoriteManager = new FavoriteManager();
const { ObjectId } = require('mongodb');

async function createFav(req, res) {
    try {
        const data = req.body;

		// console.log("pepitoController -->", data  )

        const newFavorite = await favoriteManager.createFavorite(data);
        return res.status(200).send(newFavorite);

    } catch (error) {
        console.error('Error al guardar un favorito', error);
		return res.status(400).send(error);
    }
}



async function getAllFavorite(req, res) {
	try {
		const favs = await favoriteManager.getAllFavorites();
		return res.status(200).send(favs);

	} catch (error) {
		console.error('Error al obtener los favoritos', error);
		return res.status(400).send(error);
	}
}

//Delete favorite
async function deleteFav(req, res) {
    try {
     
	   const {id}= req.params;

       console.log("que id tengo en el delete del controller? ->", id)
       //__________________________


       const objectIdToDelete = new ObjectId(id);
       console.log(objectIdToDelete);
       //__________________________

        const result = await favoriteManager.deleteFavorite(objectIdToDelete);
        console.log("result ->", result)
        if (result) {
            return res.status(200).send(result);
        } 
    } catch (error) {
        console.error('Error al eliminar un favorito', error);
        return res.status(400).send(error);
    }
}

module.exports = { createFav, getAllFavorite, deleteFav};