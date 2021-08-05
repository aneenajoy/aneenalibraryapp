const express = require('express');
const admin1Router = express.Router();

function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Library'
        });
    });

    admin1Router.get('/add',function(req,res){
        res.send("Book is successfully added")
    });
    return admin1Router;
}

module.exports = router;

