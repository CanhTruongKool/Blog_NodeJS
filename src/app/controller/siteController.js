const Blogs = require('../Models/Blogs') 


class siteController{
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

        /*
        // viet bang promise
        Blogs.find({})
            .then(Blog =>res.json(Blog))
            .catch(next);
        */
            res.render('search')
    }
   
    search(req,res)
    {
        res.render('search')
    }

    show(req,res){
        
    }
}

module.exports = new siteController;