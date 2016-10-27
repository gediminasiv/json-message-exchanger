var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/fetch-taxis', function (req, res) {
    var response = {
        "msg-id": "request journey response",
        "car-bids": [
           {"car-name":"Fred", "price":12.50},
           {"car-name":"Sid", "price":18.20},
           {"car-name":"Rodney", "price":9.99}
        ]
    };

    res.json(response);
});

app.post('/order-bid', function (req, res) {
    var response = {
        "msg-id": "request journey confirmed",
        "car-name": req.body['car-name'],
        "car-price": req.body['price']
    };

    res.json(response);
});

app.listen(3000);
