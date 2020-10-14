var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "DataBasePervasive"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;