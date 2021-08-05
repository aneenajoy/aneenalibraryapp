const express = require('express');
const app = new express();
const port = process.env.PORT || 4567;
const nav = [{link:'/signup',name:'Signup'},{link:'/login',name:'Login'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin1',name:'Add Book'},{link:'/admin2',name:'Add Author'}];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const admin1Router = require('./src/routes/admin1Routes')(nav);
const admin2Router = require('./src/routes/admin2Routes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin1', admin1Router);
app.use('/admin2', admin2Router);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

//SIGN UP ROUTER
app.get('/signup', function (req, res) {
    res.render('signup',
        {
            nav,
            title:'Library'
        })
})
//LOGIN ROUTER
app.get('/login', function(req, res){    
    res.render('login',
        {
            nav,
            title:'Library'
        })
});


app.listen(port,()=>{console.log("Server ready at" + port)});
