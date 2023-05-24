const newtabRouter = require('./newtab');
const siteRouter = require('./site');



function route(app){

 // neu then trangchu vao sau / thi luc duyet web cung phai them trang chu sau port
    app.get('/', (req, res) => {
        res.render('home')
    })
    // tao link toi trang newtab
   app.use('/newtab', newtabRouter);

    // tao link toi trang newtab
    app.use('/search',siteRouter);
    /*
    app.get('/search', (req, res) => {
        res.render('search')
        // alert content of query
        console.log(req.query)
    })*/
}

module.exports = route;