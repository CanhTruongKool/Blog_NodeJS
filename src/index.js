const { json } = require('express');
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');

// add database
const db = require("./config/db")
db.connect();

// set up routes
const route = require('./routes')

//get css direction
app.use(express.static(__dirname + '/public'));

//them express handlebars

const { engine } = require ('express-handlebars');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./src/resources/views");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// them thu vien morgan de quan ly log
/*
const morgan = require('morgan')
app.use(morgan('combined'))*/

//Route init
route(app)

//post method
app.use(express.urlencoded({
  extended:true
}))
app.use(json())
app.post('/search', (req, res) => {
  res.send('search')
  console.log(req.body)
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})