# axios Post 던지기

axios post로 데이터를 전송하면, 
node에서도 post로 받되
cors(크로스오리진)과, body-parse라는 모듈을 설치해야한다.


```javascript
var cors = require('cors')
var bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
```

app.use(bodyParser.urlencoded({ extended: false }))를 사용했었는데

app.use(bodyParse.json())을 몰라서 고생함.