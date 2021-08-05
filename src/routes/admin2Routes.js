const express = require('express');
const admin2Router = express.Router();

function router(nav){
    admin2Router.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        });
    });

    admin2Router.get('/add',function(req,res){
        res.send("Author is successfully added")
    });
    return admin2Router;
}

module.exports = router;
