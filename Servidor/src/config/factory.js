// Importamos la librería de MongoDB y la clase Database definida previamente
const { MongoClient } = require('mongodb');
const Database = require('./mongodb.js');

// Creamos una instancia de la clase Database
this.db = new Database();

// Función asincrónica para crear un documento en una colección específica
async function createDocument(collection, data) {
	console.log(collection, data);

	try {
		// Verificamos si la conexión a la base de datos ya está establecida
		if (!this.db[collection]) {
			await this.db.connectToDatabase();
		}

		// Insertamos un documento en la colección especificada
		return this.db[collection].insertOne(data);
	} catch (error) {
		// En caso de error, lanzamos una excepción
		throw error;
	}
}

// Exportamos la función createDocument para que pueda ser utilizada en otros módulos
module.exports = { createDocument };
