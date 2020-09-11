const router = require("express").Router();
const KatalogController = require("../controllers/KatalogController");

router.get("/", (req, res) => {
    res.send("Katalog Page")
})
router.get("/katalogs", KatalogController.fetchCatalog);
router.post("/katalogs", KatalogController.addCatalog)

module.exports = router;