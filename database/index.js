var constant = require('./../contant.json');

var dbCredentials = {
    host: constant.db.host,
    database: constant.db.database,
    user: constant.db.userName,
    password: constant.db.password,
    dialect: constant.db.dialect,
    port: constant.db.port,
},
{ Pool } = require('pg'),
_db = new Pool(dbCredentials);

module.exports = {
    connect: function () {
        _db.connect((err, client, release) => {
            if (err) {
                return console.error('Error acquiring client', err.stack)
            }
            client.query('SELECT NOW()', (err, result) => {
                release()
                if (err) {
                    return console.error('Error executing query', err.stack)
                }
                console.log("Connected to Database!");
            })
        })
    },
    get: function () {
        return _db;
    },
};