const { MongoClient } = require('mongodb');
require('dotenv').config();
const DB = process.env.MONGO_DB_NAME;
const URI = process.env.MONGO_DB_URI;

// Definimos una clase llamada Database
class Database {
	constructor() {
		// URI de conexión a la base de datos MongoDB
		this.uri = URI;

		// Creamos una instancia del cliente de MongoDB
		this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

		// Inicializamos la variable para almacenar la referencia a la base de datos
		this.db = null;
	}

	// Método para conectar a la base de datos
	async connectToDatabase() {
		try {
			// Conectamos al servidor de MongoDB
			await this.client.connect();

			// Obtenemos una referencia a la colección "users" en la base de datos "users"
			this.usersCollection = this.client.db(DB).collection('users');

			// Obtenemos una referencia a la colección "picture" en la base de datos "picture"
			this.actividadPicture = this.client.db(DB).collection('picture');

			// Obtenemos una referencia a la colección "booking" en la base de datos "booking"
			this.bookingCollection = this.client.db(DB).collection('booking');

			// Obtenemos una referencia a la colección "publication" en la base de datos "picture"
			this.publicationCollection = this.client.db(DB).collection('publication');

			// Obtenemos una referencia a la colección "publication" en la base de datos "photo"
			this.photoCollection = this.client.db(DB).collection('photo');

			this.favoriteCollection = this.client.db('favorite').collection('favorite');  

			// Imprimimos un mensaje de conexión exitosa
			console.log('Connected to database');
		} catch (error) {
			console.error(error);
		}
	}

	// Método para desconectar del servidor de MongoDB
	async disconnect() {
		await this.client.close();
		console.log('Disconnected from database');
	}
}

// Exportamos la clase Database para que pueda ser utilizada en otros módulos
module.exports = Database;
