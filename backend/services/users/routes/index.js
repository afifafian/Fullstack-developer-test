const router = require('express').Router();
const UserController = require("../controllers/UserController");

router.get('/', (req, res) => {
    res.send("Hello from docker again!")
})
router.get('/users', UserController.getAll)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router;