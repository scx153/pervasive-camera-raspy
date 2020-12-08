var mysql = require("mysql2")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "databasepervasive"
  });
  
  con.connect(function (err){
      if(err) throw err;
  });
  
  module.exports = con;