var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser')
var mysql      = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'topic'
});
 
connection.connect();
 
var Name ='/api'
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post(Name + '/usi',function(req,res){
var results = {code:'00',msg:'정상'}
  var m_id = req.body.userinfo.m_id;
  var m_ps = req.body.userinfo.m_ps;

    var sql = `INSERT INTO topic.testabc (abc,def) VALUES ('${m_id}','${m_ps}');`
    connection.query(sql, function (error, db_results) {
        if (error) {
          console.log('에러')
          results.code="99"
          results.msg=err
          res.status(200).json(results)
        }else{
          console.log('성공')

          res.status(200).json(results)
        
        }
        
      });
       
      connection.end();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
