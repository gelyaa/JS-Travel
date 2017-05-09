
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Travel'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Travel'
    });
};