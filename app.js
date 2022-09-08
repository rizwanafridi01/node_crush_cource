const express = require('express');

const app = express()


//// view engine ejs

app.set('view engine','ejs');

app.listen(3000);


app.get('/',(req, res) => {
    const blogs =[
        {
            title:'test title', snippet:"this is short Desc"
        },
        {
            title:'test title', snippet:"this is short Desc"
        }
    ];
    // res.send('<p>node Mon app</p>');
    res.render('index',{title: 'Home', blogs});
});


app.get('/about',(req, res) => {
    res.render('about',{ title: "About"});
});


app.get('/blog/create',(req, res) =>{
    // res.send('<p>dededede</p>')
     res.render('create',{title:"Create Blog"});
});





app.use((req, res) => {
    res.status(404).render('404',{ title:"404"});
}); 