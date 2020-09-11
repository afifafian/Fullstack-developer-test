const { MongoClient } = require("mongodb");
const dbUrl = process.env.DB_URL || 'mongodb://mongo:27017';
const dbName = process.env.DB_NAME || 'UserDB';
const client = new MongoClient(dbUrl, { useUnifiedTopology: true });

const connect = async () => await client.connect()
connect()

const db = client.db(dbName);

module.exports = db;