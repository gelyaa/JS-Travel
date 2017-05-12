/**
 * Created by chaika on 09.02.16.
 */
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');

    //Сторінки
    //Головна сторінка
    app.get('/', pages.home);

    app.get('/way.html', pages.way);

    app.get('/about.html', pages.about);

    app.get('/login.html', pages.login);

    app.get('/write.html', pages.write);

    app.get('/where.html', pages.where);

    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    app.get('/my-url.html', function (req, res) {
        var url = req.query.url;
        callForApiSkyscanner(res, url);
    });

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:' + port + '/');
    });

}

function callForApiSkyscanner(res, url) {

    var http = require('http');
    var body = '';
    http.get({
        host: 'partners.api.skyscanner.net',
        path: url + '?apikey=prtl6749387986743898559646983194'
    }, function (response) {
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            res.send(body);
        });
    });
    return body;

};

exports.startServer = startServer;