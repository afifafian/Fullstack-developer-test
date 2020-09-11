const KatalogModel = require("../models/KatalogModel");

class KatalogController {
    static async fetchCatalog(req, res) {
        try {
            const Katalog = await KatalogModel.findAll()
            return res.status(200).json(Katalog)
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }
    static async addCatalog(req, res) {
        try {
            const newKatalog = {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl
            }
            const addedKatalog = await KatalogModel.create(newKatalog)
            return res.status(201).json(addedKatalog.ops[0])
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }
}

module.exports = KatalogController;