//home
exports.home = function(req,res)
{
    res.render('home', {
        title : "STAR WARS SUCKS",
    });
};

//not found
exports.not_found = function(req,res)
{
    res.send("This is not the page you are looking for *_*");
};