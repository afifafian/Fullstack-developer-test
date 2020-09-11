const db = require('../config/mongo');
const User = db.collection("users");

class UserModel {
    static findAll () {
        return User.find().toArray()
    }

    static findOne (value) {
        return User.findOne(value)
    }
    
    static create(newUser) {
        return User.insertOne(newUser);
    }
}

module.exports = UserModel