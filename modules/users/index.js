var dataAccess = require('../../database/dal'),
constant = require('../../contant.json');

var users = {
    register: function(req, res){
        var data = {
            userName: req.body.userName,
            emailAddress: req.body.emailAddress,
            password: req.body.password,
        }
        dataAccess.add(
            constant.db.tables.users,
            data
        )
        .then(function (result) {
            return res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).json(err);
        });
    },
    login: function(req, res){
        var data = {
            emailAddress: req.body.emailAddress,
            password: req.body.password,
        }
        console.log(data);
        dataAccess.get(
            constant.db.tables.users,
            data
        )
        .then(function (result) {
            return res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).json(err);
        });
    }
}

module.exports = users;