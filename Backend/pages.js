
exports.home = function(req, res) {
    res.render('home', {
        pageTitle: 'Travel'
    });
};

exports.way = function(req, res) {
    res.render('way', {
        pageTitle: 'Travel'
    });
};

exports.about = function(req, res) {
    res.render('about', {
        pageTitle: 'Travel'
    });
};

exports.login = function(req, res) {
    res.render('login', {
        pageTitle: 'Travel'
    });
};

exports.write = function(req, res) {
    res.render('write', {
        pageTitle: 'Travel'
    });
};