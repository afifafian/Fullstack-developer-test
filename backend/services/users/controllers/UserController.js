const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

class UserController {
    static async getAll(req, res) {
        try {
            const User = await UserModel.findAll()
            return res.status(200).json(User)
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }

    static async register(req, res) {
        try {
            if (req.body.username == "" || !req.body.username) {
                return res.status(400).json({ "message": "username cannot empty" })
            } else if (req.body.password === "" || !req.body.password) {
                return res.status(400).json({ "message": "password cannot empty" })
            } else {
                const newUser = {
                    username: req.body.username,
                    password: req.body.password
                }
                const addedUser = await UserModel.create(newUser)
                return res.status(201).json(addedUser.ops[0])
            }
            
        } catch (error) {
            console.log("masuk??")
            return res.status(500).json({ "message": error })
        }
    }

    static async login(req, res) {
        try {
            const User = await UserModel.findOne({ username: req.body.username });
            const password = req.body.password;
            
            if (!User || password !== User.password ) {
                return res.status(404).json({ "message": "Invalid username or password"});
            } else {
                const token = jwt.sign(
                    {
                        _id: User._id,
                        username: User.username,
                    },
                    "jwtSECRET"
                );
                return res.status(200).json({ access_token: token });
            }
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }
}

module.exports = UserController;