const { FavoriteManager } = require("../dao");
const favoriteManager = new FavoriteManager();

async function createFavorite(req, res) {
    try {
        const data = req.body;
		// const {userId, publicationId} = req.body;

		console.log("pepitooooooooooooooooooo -->", data  )

        const newFavorite = await favoriteManager.createFavorite(data);
		console.log("pepitooooooooooooooooooo manager dao -->", newFavorite )
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
async function deleteFavorite(req, res) {
    try {
       // const userId = req.params.userId; // Obtener el ID del usuario desde la solicitud
       // const publicationId = req.params.publicationId; // Obtener el ID de la publicación desde la solicitud
	   const {id}= req.params;

        const result = await favoriteManager.deleteFavorite(id);
        if (result.success) {
            return res.status(200).send(result.message);
        } else {
            return res.status(404).send(result.message);
        }
    } catch (error) {
        console.error('Error al eliminar un favorito', error);
        return res.status(400).send(error);
    }
}

module.exports = { createFavorite, getAllFavorite, deleteFavorite};