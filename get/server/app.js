const express = require('express');
var cors = require('cors')
var app = express();
var mysql = require('mysql');

app.use(cors())

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'topic'
});

app.get('/', function (req, res) {
  res.send('<a href="./userInfo">userInfo</a>')

});

app.get('/userInfo', function (req, res) {
  var query = req.query
  var idval = query.idval;
  var passval = query.passval;
  connection.connect();

  var sql = "INSERT INTO topic.userinf (id,password) VALUES ('" + idval + "','" + passval+"')" 
    connection.query(sql, function (error, results, fields) {
      if (error) {console.log('error')}
      console.log('The solution is: ', results)
    });
    console.log('완료2')
 
 })
 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});