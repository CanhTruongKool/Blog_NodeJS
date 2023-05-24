const { json } = require('express');
const express = require('express')
const app = express()
const port = 3000

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


// them thu vien morgan de quan ly log
/*
const morgan = require('morgan')
app.use(morgan('combined'))*/

//Route init
route(app)

/* sau khi dung routes thi bo het link qua routes
// neu then trangchu vao sau / thi luc duyet web cung phai them trang chu sau port
app.get('/', (req, res) => {
  res.render('home')
})
// tao link toi trang newtab
app.get('/newtab', (req, res) => {
  res.render('newtab')

})
// tao link toi trang newtab
app.get('/search', (req, res) => {
  res.render('search')
  // alert content of query
  console.log(req.query)
})
*/

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