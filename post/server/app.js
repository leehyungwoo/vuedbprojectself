var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/form_receiver',(req,res)=>{
    var id = req.body.a; 
    var password = req.body.b; 
 

	console.log(id,password)
 
 

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});