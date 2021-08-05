const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name:'Joseph Barbera',
            years:'1911-2006',
            img:"barbera.jpg"
        },
        {
            name:'J K Rowling',
            years:'1965-Present',
            img:"rowling.jpg"
        },
        {
            name:'Vaikom Muhammad Basheer',
            years:'1908-1994',
            img:"basheerimg.jpg"
        }
    
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id1',function(req,res){
        const id1 = req.params.id1;
        res.render("author",
        {
            nav,
            title:'Library',
            author:authors[id1]
        });
        
    });
    return authorsRouter;
}



module.exports = router;