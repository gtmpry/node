var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'gtmpry',
  password : '0c7b9d22',
  database : 'gtmpry'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 
