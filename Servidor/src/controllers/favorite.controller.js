const { FavoriteManager } = require("../dao");
const favoriteManager = new FavoriteManager();

async function createFavorite(req, res) {
    try {
        const data = req.body;

        const newFavorite = await favoriteManager.createFavorite(data);
        return res.status(200).send(newFavorite);

    } catch (error) {
        console.error('Error al guardar un favorito', error);
		return res.status(400).send(error);
    }
}



async function getAllFavorite(req, res) {
	try {
		const favs = await favoriteManager.getAllFavorite();
		return res.status(200).send(favs);

	} catch (error) {
		console.error('Error al obtener los favoritos', error);
		return res.status(400).send(error);
	}
}

module.exports = { createFavorite, getAllFavorite};