// this is the work brian did trying to get mongo to work with the sidebar component

// const db = require("../models")

// module.exports = {
//     findAll: function(req, res) {
//        db.User
//        .find(req.query)
//        .sort({userName: -1})
//        .then(dbModel => res.json(dbModel))
//        .catch(err => res.status(422).json(err))
//     },
//     findById: function(req, res) {
//         db.User
//         .findById(req.params.id)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err))
//     },
//     create: function(req, res) {
//         db.User
//         .create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     remove: function(req, res) {
//         db.User
//         .findById({_id: req.params.id})
//         .then(dbModel => dbModel.remove())
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err))
//     }
// }