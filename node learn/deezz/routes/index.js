exports.home = function(req, res) {
    res.render('home', {
        test: "working"
    })
};