var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//home
app.get('/', routes.home);

//searched
app.get('/search=:search?', routes.search);

//next
app.get('=search=:next?',routes.next)

//notfound
app.get('*', routes.not_found);

app.listen(3000 ,function() 
{
    console.log("alo is on local host 3000");
});
