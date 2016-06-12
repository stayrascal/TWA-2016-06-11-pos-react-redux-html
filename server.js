var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new express();
var port = 3000;

var compiler = webpack(config);
app.use(express.static('public'));
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    }else {
        console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});
