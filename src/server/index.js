let analyzedData = {};
// const URL = 'https://api.aylien.com/api/v1/sentiment'
var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi")
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
// const cors = require('cors');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json)
// app.use(cors());


var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


app.use(express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile('index.html', path.resolve(__dirname, '../../dist'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
});

app.post('/test', function(req, res) {
    console.log(req.body.link);
    analyze(req.body.link);
    console.log(analyzedData + " post method");
    res.send(analyzedData);

});

const analyze = async (url) => {
    textapi.sentiment({
        'url': url,
        mode: 'document'
    },
    (res, err) => {
    if (err == null) {
        analyzedData = res;
        console.log(analyzedData + "analyze method");
        return analyzedData;
    }else{
        console.log(err)
    }
})};
