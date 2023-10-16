// Importamos la librería de MongoDB y la clase Database definida previamente
const { MongoClient } = require('mongodb');
const Database = require('../config/mongodb.js');

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
// funcion para buscar todo

async function allDocument(collection) {
	try {
		if (!this.db[collection]) {
			await this.db.connectToDatabase();
		}
		console.log(collection);
		const document = await this.db[collection].find({}).toArray();
		return document;
	} catch (e) {
		console.error(e);
	}
}

//funcion para buscar por parametro

async function getOneDocument(collection, query) {
	try {
		if (!this.db[collection]) {
			await this.db.connectToDatabase();
		}
		const document = await this.db[collection].findOne(query);
		return document;
	} catch (e) {
		console.error(e);
	}
}

async function UpdateDocument(collection, filter, dataUpdate) {
    try {
        if (!this.db[collection]) {
            await this.db.connectToDatabase(); //-->
        }
        const document = await this.db[collection].updateOne(filter, 
            {
                $set:dataUpdate
            });
        return document;
    } catch (e) {
        console.error(e);
    }
}

// Función asincrónica para eliminar un documento de una colección

async function deleteDocument(collection, dataDelete) {
    try {
        if (!this.db[collection]) {
            await this.db.connectToDatabase();
        }

        const result = await this.db[collection].deleteOne(dataDelete);

        if (result.deletedCount === 1) {
            return { success: true, message: "Documento eliminado con éxito" };
        } else {
            return { success: false, message: "Documento no encontrado" };
        }
    } catch (e) {
        console.error(e);
        return { success: false, message: "Error al eliminar el documento" };
    }
}

module.exports = { createDocument, allDocument, getOneDocument, UpdateDocument, deleteDocument };





