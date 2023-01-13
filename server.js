const express = require('express');
const path= require('path');
const app = express();

app.use(express.json());
const cors= require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, 'react-web/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/react-web/build/index.html'));
})


app.listen(8080, function () {
    console.log('8080 server success');
})

app.get('/picture', function (req, res) {
    res.json({name : 'dog'})
    //array 나 object data를 집어넣으면 된다.
})
    //리액트에서 사진 데이터가 필요하다면 /picture 로 GET요청만 하면 끝!
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'react-web/build/index.html'));
})