var express = require('express'),
	path = require('path'),
	consolidate = require('consolidate');


var app = express();
var port = 3002;
app.engine('ejs', consolidate.ejs);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackDevConfig = require('../webpack.dev.config.js');

var compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackDevConfig.output.publicPath,
	noInfo: true,
	stats: {
		colors: true
	}
}));
app.use(webpackHotMiddleware(compiler));



require('./routes')(app);



var reload = require('reload');
var http = require('http');

var server = http.createServer(app);
reload(server, app);

server.listen(port, function() {
	console.log('当前为生产环境，端口:' + port);
});