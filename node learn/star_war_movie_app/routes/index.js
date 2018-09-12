//home
exports.home = function(req,res)
{
    res.render('home', {
        title : "STAR WARS SUCKS",
    });
};
// movie single
exports.movies_singles = function(req, res)
{
    var episode_number = req.params.episode_number;
    res.send("This is episode number " + episode_number);
};

//not found
exports.not_found = function(req,res)
{
    res.send("This is not the page you are looking for *_*");
};