var express= require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');
//home
app.get('/', routes.home);

//notfound
app.get('*', routes.not_found);

app.listen(3000 ,function() 
{
    console.log("alo is on local host 3000");
});