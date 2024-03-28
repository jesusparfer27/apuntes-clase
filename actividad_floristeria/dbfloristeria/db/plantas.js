const { MongoClient } = require('mongodb');

const conectarDB = async () => {

    const user = "jesusparfer";
    const pass = "moneyS3jirhQT";
    const dbName = "actividadFloristeria";
    const db = `mongodb+srv://${user}:${pass}@jesus-valencia27.yfixy8t.mongodb.net/${dbName}`
    
    await mongoose.connect( url )
    .then ( ()=> console.log('Conectado a mongoDB'))
    .catch ( e => console.log("Error de conexión", e));

}

export default connection