const db = require('../config/mongo');
const Katalog = db.collection("catalogs");
// const { ObjectID } = require("mongodb");

class KatalogModel {
    static findAll () {
        return Katalog.find().toArray()
    }
    static create(newKatalog) {
        return Katalog.insertOne(newKatalog);
    }
}

module.exports = KatalogModel;