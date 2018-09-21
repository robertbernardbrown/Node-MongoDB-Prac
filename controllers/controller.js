const db = require("../models");

module.exports = {
    getUser: (req, res) => {
        db.Example
            .find({})
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.json(err));
    },
    updateUser: (req, res) => {
        let _id = req.body._id;
        let newObj = req.body
        db.Example
            .findOneAndUpdate(_id, {$set:newObj})
            .then(data=> res.status(200).json(data))
            .catch(err=> res.json(err));
    },
    addUser: (req, res) => {
        let user = req.body;
        db.Example
            .create(user)
            .then(data=> res.status(200).json(data))
            .catch(err=> res.json(err));
    },
    deleteUser: (req, res) => {
        let _id = req.body._id;
        db.Example
            .findOneAndRemove(_id)
            .then(data=> res.status(200).json(data))
            .catch(err=> res.json(err));
    }
}