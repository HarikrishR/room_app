var db = require('./index'),
constant = require('../contant.json');


var dataAccess = {
    add: function (tableName, doc) {
        return new Promise(function (resolve, reject) {
            var _db = db.get();
            var queryString = "INSERT INTO " + constant.db.schema + "." + tableName + "(user_name, user_email, password) VALUES('"+doc.userName+"', '"+doc.emailAddress+"', '"+doc.password+"')";
            _db.query(queryString, (err,res)=>{
                if(res)resolve(res);
                else reject(err);
            });
        });
    },
    get: function(tableName, doc) {
        return new Promise(function(resolve, reject){
            var _db = db.get();
            var queryString = "SELECT * FROM " + constant.db.schema + "." + tableName + " WHERE user_email='"+doc.emailAddress+"' and password='"+doc.password+"'";
            _db.query(queryString, (err,res)=>{
                if(res)resolve(res);
                else reject(err);
            });
        })
    }
}

module.exports = dataAccess;