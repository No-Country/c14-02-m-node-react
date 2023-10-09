const { MongoClient } = require('mongodb');

// Definimos una clase llamada Database
class Database {
    constructor() {
        // URI de conexión a la base de datos MongoDB
        this.uri = `mongodb+srv://admclonairbnb:KfBidPmDSF9599eX@clon-airbnb.zjxrwyj.mongodb.net/?retryWrites=true&w=majority`;
        
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
            this.usersCollection = this.client.db("users").collection("users");

            // Obtenemos una referencia a la colección "picture" en la base de datos "picture"
            this.actividadPicture = this.client.db("picture").collection("picture");
            
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
