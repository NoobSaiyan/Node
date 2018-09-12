const mdb = require('moviedb')('2dabd5ce9e9885ee5fc73ad97a013ee9');
mdb.searchMovie({ query: 'search' }, (err, res) => {
    console.log(res);
  });
//home
exports.home = function(req,res)
{
    res.render('home', {
        title : "Search Stuff",
    });
};
//searched

exports.search = function(req, res)
{
    var search = req.params.search;
    mdb.searchMovie({ query: search }, (err, data) => {
        res.render('result',{
            data : data , 
            search  : search
        })
      });
};

//next
exports.next = function(req,res)
{
    var next = req.params.next;
    mdb.searchMovie({ query: next }, (err, data) => {
        res.render('next',{
            data : data 
        })
      });
}

//not found
exports.not_found = function(req,res)
{
    res.send("This is not the page you are looking for *_*");
};

