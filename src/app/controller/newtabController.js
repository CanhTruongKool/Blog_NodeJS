const Blogs = require('../Models/Blogs') 
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

class newtabController{

    create(req,res)
    {
        res.render('create')
    }
    store(req, res, next) {
        console.log(req.body);
        const blog = new Blogs(req.body);
      
        blog.save()
          .then(() => res.redirect('/newtab'))
          .catch(error => {
            console.error(error);
            next(error);
          });
      }
    index(req,res,next){
        // them database
        // Blogs.find({}, function(err, Blogs) {
        //     // docs.forEach
        //     if(!err){
        //         res.json(Blogs)
        //     } else {
        //         res.status(400).json({error : "ERROR"})
        //     }
        //   });

        
        // viet bang promise
        Blogs.find({})
            .then(Blog =>
                {
                        Blog = Blog.map(Blog => Blog.toObject())
                        res.render('newtab',{Blog})
                })
            .catch(next);
        
    }

 
    show(req,res,next){
        Blogs.find({})
        .then(Blog =>
            {
                    Blog = Blog.map(Blog => Blog.toObject())
                    res.render('newtab',{Blog})
            })
        .catch(next);
    }
 
}

module.exports = new newtabController;