const Blogs = require('../Models/Blogs') 

class newtabController{

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

    show(req,res){
        res.send("Newtab's content")
    }
}

module.exports = new newtabController;